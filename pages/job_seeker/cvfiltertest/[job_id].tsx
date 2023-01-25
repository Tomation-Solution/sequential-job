import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMutation } from "react-query";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import { getCvFilterQuetions, submitCvFilterQuetions } from "../../../service/api/jobJobSeeker.api";
import Box from "../../../shared/Box/Box"
import FillinGapQuetionJobSeekerTake from "../../../shared/JobSeekerTakeCvFilterQuetion/FillinGapQuetionJobSeekerTake";
import Preloader from "../../../shared/Preloader/Preloder";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputWithLabel from "../../../shared/InputWithLabel/InputWithLabel";
import Button from "../../../shared/Button/Button";
import CheckBox from "../../../shared/Checkbox/Checkbox";
import useToast from "../../../hooks/useToastify";

export type FillInTheGapTakeTestType = {
    'id':number;
    'answer':string;
    'quetion':string;
}
export type CvFilterTestType ={
    'job_id':number;
    'fill_in_the_gap':FillInTheGapTakeTestType[],
    'filter_quetion_option':{
        'id':number,
        'quetion':string;
        'option_to_choose_from':string[];
        'answer':string;
    }[],
    'filter_quetion_multi_choice_quetion':{
        'id':number;
        'answer':string[];
        'option_to_choose_from':string[];
        'quetion':string;
    }[]
}

const schema = yup.object({
    'fill_in_the_gap':yup.array().of(yup.object({
        quetion:yup.string(),
    answer:yup.string().required('this field is needed'),
    id:yup.number(),
    })),
    'filter_quetion_option':yup.array().of(yup.object({
    quetion:yup.string(),
    answer:yup.string().required('this field is needed'),
    option_to_choose_from:yup.array().of(yup.string()),
    id:yup.number(),
    })),

    'filter_quetion_multi_choice_quetion':yup.array().of(yup.object({
        quetion:yup.string(),
        answer:yup.array().of(yup.string()),
        option_to_choose_from:yup.array().of(yup.string()),
        id:yup.number(),
        })),

})
const CvFilterTest = ()=>{
    const route = useRouter();
    const {notify} = useToast()
    const {job_id} = route.query
    // const [finalData ,setFinalData] = useState<CvFilterTestType>({} as CvFilterTestType );
    const {mutate,status,isLoading,data} = useMutation(getCvFilterQuetions,{
        onSuccess:(data)=>{
            console.log({'data Gotten':data})
        },
        'onError':(error)=>{
             
        }
    })

    const {mutate:submitQUetions,isLoading:submitting} = useMutation(submitCvFilterQuetions,{
        'onSuccess':(data)=>{
            notify('Submitted','success')
            route.push('notice/1/')
        },
        'onError':(err)=>{
            notify('Error!','error')
            console.log({err})
        }
    })





    const { register,control,setValue, watch,handleSubmit,formState: { errors } } = useForm<CvFilterTestType>({
        resolver: yupResolver(schema),
      mode: "onBlur"
    });

    const {fields,} = useFieldArray({
        name:'fill_in_the_gap',control
    })

    
    const {fields:filter_quetion_options,} = useFieldArray({
        name:'filter_quetion_option',control
    })

    const {fields:filter_quetion_multi_choice_quetion,} = useFieldArray({
        name:'filter_quetion_multi_choice_quetion',control
    })

    const onSubmit = (submmited:CvFilterTestType ) =>{
        console.log({'submitted Data':submmited})
        if(typeof job_id == 'string'){
            submitQUetions({
                'job_id':parseInt(job_id),
                'data':{'title':'...',...submmited}
            })
        }
    }

    useEffect(()=>{
        if(typeof job_id =='string'){
            mutate(parseInt(job_id))
        }
        
    },[route.isReady])

    useEffect(()=>{
        if(status==='success'){
            setValue('fill_in_the_gap',data.fill_in_the_gap.map((data)=>{
                        return {
                            'answer':'',
                            'id':data.id,
                            'quetion':data.quetion
                        }
                    }))
            setValue('filter_quetion_option',data.filter_quetion_option.map((data)=>{
                return {
                    'id':data.id,
                    'quetion':data.quetion,
                    'option_to_choose_from':data.option_to_choose_from,
                    'answer':''
                }
            }))
            setValue('filter_quetion_multi_choice_quetion',data.filter_quetion_multi_choice_quetion.map((data)=>{
                return {
                    'id':data.id,
                    'quetion':data.quetion,
                    'option_to_choose_from':data.option_to_choose_from,
                    'answer':[]
                }
            }))
        }
    },[status])
    console.log({data})
    return (
        <GeneralLayout>
            <Preloader loading={isLoading||submitting}/>
            {/* {
                data?
                <FillinGapQuetionJobSeekerTake defualts={data} finalData={finalData} setFinalData={setFinalData}/>
            
            :''} */}

            <form
                   onSubmit={handleSubmit(onSubmit)}

             >
            <h2><strong>Fill In THe Gap</strong></h2>

            <Box css={{'maxWidth':'600px','margin':'0 auto'}}>
           {
                fields.map((data,index)=>(
                    <Box key={index} >
                         <h2>{data.quetion}?{'  '} <span>____</span></h2>
            <br />
                <InputWithLabel label="Answer" register={register(`fill_in_the_gap.${index}.answer`)} />
            <br />
            
            {/* register(`fill_in_the_gap.${index}.answer` */}
                    </Box>
                ))
            }

            <br />
            <br />
            <br />
            <br />
            <h2><strong>Pick One Option</strong></h2>
            <br />
            <br />
            {
                filter_quetion_options.map((data,findex)=>(
                    <Box key={findex}>
                         <h2>{data.quetion}?{'  '} <span>____</span></h2>
                       
                         
                       
                        {
                            data.option_to_choose_from.map((option:string,index)=>(
                                <Box key={index} css={{'display':'flex','maxWidth':'400px','padding':'1rem 0'}}>
                                    {/* <CheckBox

                                    onCheck={()=>{
                                    setValue(`filter_quetion_option.${findex}.answer`,option)
                                    }}
                                    /> */}
                                    <input type="radio" name="filter_quetion_options" onChange={(e)=>{
                                        console.log(e.target.value)
                                        setValue(`filter_quetion_option.${findex}.answer`,option)

                                    }} />
                                    <p style={{'margin':'0 10px'}}>{option}</p>
                                </Box>
                            ))
                        }
                    </Box>
                ))
            }
            <br />
            <br />
            <br />
            <h2><strong>Multi CHoice Quetion</strong></h2>
            <br />
            <br />
            {
                filter_quetion_multi_choice_quetion.map((data,index)=>(
                    <Box key={index}>
                         <h2>{data.quetion}?</h2>

                       
                         {
                            data.option_to_choose_from.map((option:string,option_index)=>(
                                <Box key={index} css={{'display':'flex','maxWidth':'400px','padding':'1rem 0'}}>
                                    <CheckBox

                                    onCheck={(checked)=>{
                                        if(checked){
                                            console.log({'dont remove':option})
                                            setValue(`filter_quetion_multi_choice_quetion.${index}.answer`,[...data.answer,option])
                                        }else{
                                            console.log({'remove':option})
                                    // setValue(`filter_quetion_multi_choice_quetion.${option_index}.answer`,[...data.answer.filter((info)=>info!==option)])

                                        }
                                        
                                    }}
                                    />
                                    <p style={{'margin':'0 10px'}}>{option}</p>
                                </Box>
                            ))
                        }

                    </Box>
                ))
            }
            <br />
           <Button >Submit</Button>
           <br />
            <br />
            <br />   <br />
            <br />
            <br />
           </Box>
            </form>
        </GeneralLayout>
    )
}

export default CvFilterTest