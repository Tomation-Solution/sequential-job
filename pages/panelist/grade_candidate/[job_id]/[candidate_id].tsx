import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout";
import LiveJobWithOtherContentLayout from "../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { get_rating_sheet, rating_job_seekers, rating_job_seekersProp } from "../../../../service/api/panelist.api";
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

    const {mutate,isLoading,data:rating_sheet} = useMutation(get_rating_sheet,{
        'onSuccess':(data)=>{
            console.log({'success':data})
            notify('Rating Sheet Gotten Successfully','success')
        },
        'onError':(err:any)=>{
            console.log({'error':err})
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


    useEffect(()=>{
        if(typeof candidate_id =='string'&& typeof job_id =='string'){
            console.log({candidate_id,job_id})
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
                console.log(data)
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
        <LiveJobWithOtherContentLayout header="Tomiwa Ayandele">
            <br />
            <br />
            <Preloader loading={isLoading ||submitting}/>
            <TabsComp
                data={
                    [
                    {
                        'label':'Candidates Grade',
                        'key':'grade',
                        'template':<form onSubmit={handleSubmit(onSubmit)}>
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
                        'template':<></>
                    },
                ]}
            />
        </LiveJobWithOtherContentLayout>
    )
}

export default GradeCandidates