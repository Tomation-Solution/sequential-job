import React from 'react'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import CombineSelectAndInput from '../../shared/CombineSelectAndInput/CombineSelectAndInput'
import InputWithLabel from '../../shared/InputWithLabel/InputWithLabel'
import SelectComponent from '../../shared/Select/Select'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import "easymde/dist/easymde.min.css";
import SimpleMDE from "easymde";
import GetInstance from '../../shared/Editor'
import useToast from '../../hooks/useToastify'
import { create_job_api } from '../../service/api/job.api'
import Preloader from '../../shared/Preloader/Preloder'

export type JobCreateForm = {
  'job_title':string;
  'is_active':boolean;
  'location':string;
  'job_type':'on_site'|'hybrid'|'remote';
  'salary':number;
  'currency':'string',
  'job_required_document':string;
  'description_content':string
}

const schema = yup.object({
  'job_title':yup.string(),
  'is_active':yup.boolean(),
  'location':yup.string(),
  'job_type':yup.string(),
  'salary':yup.number(),
  'currency':yup.string(),
  'job_required_document':yup.string(),
  'description_content':yup.string(),
})
const AddJobs = () => {

  const route = useRouter() 
  const {notify} = useToast();
  const  {isLoading,mutate} = useMutation(create_job_api,{
    onError:(error:any)=>{
      console.log({'endpoint Error':error})
    },
    onSuccess:(data, variables, context)=>{
        console.log({'success':data})
        if(data.status==201){
          route.push('/')
          notify(`"${data.data.job_title}" Successful`,'success')
        }
    },
  })
  const [simpleMdeInstance,setSimpleMdeInstance] =  useState<SimpleMDE | null>(null);


  const { register, setValue,handleSubmit, formState: { errors } } = useForm<JobCreateForm>({
    resolver: yupResolver(schema)
  });


  const onSubmit = (job:JobCreateForm)=>{
    let new_job:JobCreateForm = {...job}
    if(simpleMdeInstance){1
      // we get the data and put it in the json so we can send to the backemnd
      
      new_job['description_content']=simpleMdeInstance.value()
      mutate(new_job)
    }
   
  }

  console.log({errors})
  useEffect(()=>{
    setValue('description_content','...')
  },[])
  return (
    <LiveJobWithOtherContentLayout
    header='Create Job'
    >
      <Preloader loading={isLoading}/>
    <form onSubmit={handleSubmit(onSubmit)}>
        <InputWithLabel label='Job Title'
        register={register('job_title')}
        errors={errors.job_title?.message}
        />
    <br />
        <SelectComponent 
          showLabel={true}
          label='Location'
          setVaue={setValue}
          name='location'
          options={[
            {
              'name':'Lagos',
              'value':'Lagos'
            },
            {
              'name':'Abuja',
              'value':'Abuja'
            },
            {
              'name':'Benin',
              'value':'Benin'
            },
          ]}
        />

<br />
        <SelectComponent 
          showLabel={true}
          label='Job Type'
          options={[
            {
              'name':'On Site',
              'value':'on_site'
            },
            {
              'name':'Remote',
              'value':'remote'
            },
          ]}
          setVaue={setValue}
          name='job_type'
        />




<br />
          <label htmlFor="">Salary</label>
          <CombineSelectAndInput
          select_name='currency'
          select_setValue={setValue}
          select_options={[
            {'name':'Dollar','value':'dollar'},
            {'name':'Naira','value':'naira'},
            {'name':'Pounds','value':'pounds'},
            {'name':'Sterlin','value':'sterlin'},
          ]}
          // for the input field
          inputLabel={'salary'}
          inputRegister={register('salary')}

          />
          <br />
        <InputWithLabel label='Required Document'
        register={register('job_required_document')}
        errors={errors.job_required_document?.message}
        />
        <br />
        <GetInstance setInstance={setSimpleMdeInstance}
        />

          <Button color={'lightBlueBtn'} css={{'width':'30%','margin':'15px auto'}}>Submit</Button>
        <br />
        <br />
        <br />
        <br />

    </form>
    </LiveJobWithOtherContentLayout>
  )
}


export default AddJobs