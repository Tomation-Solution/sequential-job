import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout";
import LiveJobWithOtherContentLayout from "../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { AggregateBreakDownResponse, getRatingSheetResponse, get_interview_aggregate, get_interview_aggregate_breakdown, get_rating_sheet, rating_job_seekers, rating_job_seekersProp } from "../../../../service/api/panelist.api";
import Box from "../../../../shared/Box/Box";
import Button from "../../../../shared/Button/Button";
import TabsComp from "../../../../shared/Tabs/Tabs";
import TextAreaWithLabel from "../../../../shared/TextAreaWithLabel/TextAreaWithLabel";
import WhiteInput from "../../../../shared/WhiteInput/WhiteInput";

import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import Preloader from "../../../../shared/Preloader/Preloder";
import useToast from "../../../../hooks/useToastify";
import { TableColumnType } from "../../../../shared/Table/Table.style";
import Table from '../../../../shared/Table/Table'

const schema = yup.object({
    'job':yup.number().required(),
    'job_applicant':yup.number().required(),
    'rating_sheet':yup.array().of(yup.object().shape({
        'value':yup.string(),
        'cut_off':yup.string(),
        'score':yup.number(),
    })),
    'interviewer_remark':yup.string().required(),
    'summary_of_qualification':yup.string().required(),
})

const GradeCandidates:NextPage = ()=>{
    const {notify} =useToast();
    const [show_table,setShowTable] = useState(false)
    const {data:aggBreakDown,isLoading:BreakDownLoading,mutate:getaggBreakDown} = useMutation(get_interview_aggregate_breakdown,{
    onSuccess(data, variables, context) {
        setShowTable(true)
    },
    })
    const getAggreColumns = (aggr_data:AggregateBreakDownResponse[]|undefined):TableColumnType[]=>{
        if(aggr_data){
            if(aggr_data.length!==0){
                if(aggr_data[0].rating_sheet.length!=0){
                    return aggr_data[0].rating_sheet.map((data,index)=>{
                        return {
                            'Header':data.value,
                            'accessor':`rating_sheet`,
                            Cell:(tableProps:any)=>(
                                <p>{tableProps.row.original.rating_sheet[index].score}</p>
                            ),
                            'id':index
                        }
                    })
                }
             }
        }
         return []
    }
    const getObtainableAndObtainedPoints = (aggr_data:AggregateBreakDownResponse[]|undefined,row=0):{obtainable:number;obtained:number}=>{
        if(aggr_data){
            if(aggr_data.length!==0){
                if(aggr_data[0].rating_sheet.length!=0){
                    const score_obtainable:number = aggr_data[row].rating_sheet.reduce((total,currentValue)=>{

                        return total + currentValue.cut_off
                    },0)
                    const score_obtained:number = aggr_data[row].rating_sheet.reduce((total,currentValue)=>{
                        let score =0
                         if(currentValue.score){
                             score = currentValue.score
                         }
                         return total + score
                     },0)

                    return {
                        'obtainable':score_obtainable,
                        'obtained':score_obtained,
                    }
                }
             }
        }

        return {'obtainable':0,'obtained':0}
    }
    const prop_columns:TableColumnType[] =[
        {
            Header:'Full Name',
            accessor:'panelist',
            Cell:(tableProps:any)=>{
                return (
                    <p>{tableProps.row.original.panelist.name}</p>
                )
            }

        },
        ...getAggreColumns(aggBreakDown),
        {
            Header:'Total Obtainable Points',
            accessor:'rating_sheet',
            id:-2,
            Cell:(tableProps:any)=>(
                <p>{getObtainableAndObtainedPoints(aggBreakDown,tableProps.row.index).obtainable}</p>
            )
        },
        {
            Header:'Obtained Points',
            accessor:'rating_sheet',
            id:-1,
            Cell:(tableProps:any)=>(
                <p>{
            (getObtainableAndObtainedPoints(aggBreakDown,tableProps.row.index).obtained / getObtainableAndObtainedPoints(aggBreakDown,tableProps.row.index).obtainable)*100
                
                }%</p>
            )
        },
        {
            Header:'% of Points Obtained',
            accessor:'rating_sheet',
            id:-3,
            Cell:(tableProps:any)=>(
                <p>{getObtainableAndObtainedPoints(aggBreakDown,tableProps.row.index).obtained}</p>
            )
        },
        {
            Header:'summary_of_qualification',
            accessor:'summary_of_qualification',
        },
        {
            Header:'interviewer_remark',
            accessor:'interviewer_remark',
        },
    ] 
    
      
    
    const {isLoading:aggregate_isloading,mutate:get_aggregate,data:aggregate_data} = useMutation(get_interview_aggregate,{
        'onError':(err)=>{
        },
        'onSuccess':(data)=>{
        }
    })

    const {mutate,isLoading,data:rating_sheet} = useMutation(get_rating_sheet,{
        'onSuccess':(data)=>{
            notify('Rating Sheet Gotten Successfully','success')
        },
        'onError':(err:any)=>{
            notify('Check your network and refresh','error')
        }
    })
    const {isLoading:submitting,data:rating_sheet_response_for_submmission,mutate:handleSubmission} = useMutation(rating_job_seekers,{
        'onSuccess':(data)=>{
            console.log({'resp from subbmited data':data})
            notify('Updated Success','success')
        },
        'onError':(err)=>{
            console.log({'resp from subbmited err':err})
        }
    })
    const route = useRouter();
    const {candidate_id,job_id} = route.query
    
    const [currentJobId,setCurrentJobId] = useState<number>(-1)
    const { register,control, handleSubmit, setValue,formState: { errors } } = useForm<rating_job_seekersProp>({
        resolver: yupResolver(schema),
        defaultValues:{
            'rating_sheet':[]
        },
        mode: "onBlur"
      });




      const { fields:rating_fields, append, remove} = useFieldArray({
        name:'rating_sheet',control
      })


      const onSubmit = (data: rating_job_seekersProp) =>{
        console.log({'Data Submited':data})
        handleSubmission(data)
      }

      
      const calculate_perentageRating = (rating_sheet:{cut_off:number;id:string;score: number;value: string}[]):number=>{
        // Score Obtainable aka CutOFf
        const score_obtainable:number = rating_sheet.reduce((total,currentValue)=>{

            return total + currentValue.cut_off
        },0)

        const score_obtained:number = rating_sheet.reduce((total,currentValue)=>{
           let score =0
            if(currentValue.score){
                score = currentValue.score
            }
            return total + score
        },0)
        return (score_obtained / score_obtainable) *100
      }
    useEffect(()=>{
        if(typeof candidate_id =='string'&& typeof job_id =='string'){
            setValue('job',parseInt(job_id))
            setValue('job_applicant',parseInt(candidate_id))
            mutate({
                'job_id':parseInt(job_id),'job_applicant':parseInt(candidate_id)
            })
        }
    },[route.isReady])
    
    useEffect(()=>{

        if(rating_sheet){
            setValue('rating_sheet',rating_sheet.rating_sheet.map((data,index)=>{
                return {
                    'value':data.name||data.value as string,
                    'cut_off':data.cut_off,
                    'score':data.score?data.score:0
                }
            }))

            setValue('interviewer_remark',rating_sheet.interviewer_remark)
            setValue('summary_of_qualification',rating_sheet.summary_of_qualification)
        }

    },[rating_sheet])
    return (
        <GeneralLayout>
            <br />
            <br />
            
            <Preloader loading={isLoading ||submitting||aggregate_isloading||BreakDownLoading}/>
            <TabsComp
            onChange={(value)=>{
                if(value=='aggregate'){
                    //this means the person want to see the aggregate we 
                    // dont want to render evenry time so the code bellow 
                    // prevent it
                    if(typeof job_id == 'string'){
                        if(parseInt(job_id) != currentJobId){
                            //if this is true update the currentJobId and trigger the mutate
                            setCurrentJobId(parseInt(job_id))
                            // get_aggregate({'job_id':parseInt(job_id)})
                            setShowTable(false)
                            getaggBreakDown(parseInt(job_id))

                        }
                    }
                }
            }}
            data={
                [
                {
                    'label':'Candidates Grade',
                    'key':'grade',
                    'template':<form onSubmit={handleSubmit(onSubmit)} style={{'maxWidth':'1000px','margin':'0 auto'}}>
                            <Box>
                            {
                                rating_fields.map((data,index)=>(
                    <Box css={{'display':'flex','justifyContent':'space-between','margin':'10px auto'}} key={index}>
                        <Button color={'whiteBtn'} css={{'width':'40%'}}>
                        {data.value}
                        </Button>
                        <WhiteInput 
                        regsiter={register(`rating_sheet.${index}.score`)}
                        placeHolder={`/${data.cut_off}`}  css={{'width':'40%'}}/>
                    </Box>
                                ))
                            }
                            <br />
                            <Box css={{'display':'flex','justifyContent':'space-between','margin':'10px auto'}} >
                        <Button color={'whiteBtn'} css={{'width':'40%'}}>
                        Percentage  Rating
                        </Button>
                        <WhiteInput 
                        // regsiter={register(`rating_sheet.${index}.score`)}
                        placeHolder={`${calculate_perentageRating(rating_fields)}`}
                            css={{'width':'40%'}}/>
                    </Box>
                            <br />
                            <TextAreaWithLabel label="Interviewer’s Remark"
                                register={register('interviewer_remark')}
                            />
                            <br />
                            <TextAreaWithLabel label="Summary Of Qualification"
                                register={register('summary_of_qualification')}
                            />
                            <br />
                            <br />
                            <br />
                            <Button css={{'margin':'0 auto'}}>Submit</Button>
                            <br />
                            <br />
                            <br />
                        </Box>
                        
                    </form>
                },
                {
                    'label':'Aggregate Grade',
                    'key':'aggregate',
                    'template':
                    <>

                    {
                show_table?
                <Table prop_columns={prop_columns} custom_data={aggBreakDown}/>:''
                    }
                    
                    {/* {
                        aggregate_data?
                        
                        aggregate_data.map((data,index)=>(
                            <Box css={{'border':'1px solid red','width':'100%'}}>
                            </Box>  
                        ))
                        :''
                    } */}
                    </>

                },
            ]}
            />

            {/* <Box 
css={{'display':'flex','justifyContent':'space-between','margin':'10px auto'}} key={index}>
    <Button color={'whiteBtn'} css={{'width':'50%'}}>
    {data.value}
    </Button>
   
   <Button color={'whiteBtn'} css={{'width':'40%'}}>
    {data.aggrate_rating}
   </Button>
</Box> */}
        </GeneralLayout>
    )
}

export default GradeCandidates



