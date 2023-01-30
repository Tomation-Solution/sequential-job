import React from 'react'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import CombineSelectAndInput from '../../shared/CombineSelectAndInput/CombineSelectAndInput'
import InputWithLabel from '../../shared/InputWithLabel/InputWithLabel'
import SelectComponent from '../../shared/Select/Select'
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
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
import listOfNigerianStates  from '../../utils/list_of_states'
import {AiFillCloseCircle} from 'react-icons/ai'


export type JobCreateForm = {
  'job_title':string;
  'is_active':boolean;
  'location':string;
  'job_type':'on_site'|'hybrid'|'remote';
  'salary':number;
  'currency':'string',
  'job_required_document':{'name':string}[];
  'description_content':string;
  job_variant:'filter_only'|'filter_and_test'

}

const schema = yup.object({
  'job_title':yup.string().required(),
  'is_active':yup.boolean() ,
  'location':yup.string().required(),
  'job_type':yup.string().required(),
  'salary':yup.number().required(),
  'currency':yup.string().required(),
  'job_required_document':yup.array().of(yup.object({
    'name':yup.string().required(),
  })),
  'description_content':yup.string().required(),
  job_variant:yup.string().required()
})
const AddJobs = () => {
  const [componentHasMounted,setComponentHasMounted] = useState(false)
  const route = useRouter() 
  const {notify} = useToast();
  const  {isLoading,mutate} = useMutation(create_job_api,{
    onError:(error:any)=>{
      console.log({'endpoint Error':error})
    },
    onSuccess:(data, variables, context)=>{
        console.log({'success':data})
        if(data.status==201){
          route.push('/dashboard_index')
          notify(`"${data.data.job_title}" Successful`,'success')
        }
    },
  })
  const [simpleMdeInstance,setSimpleMdeInstance] =  useState<SimpleMDE | null>(null);


  const { register,control,setValue,handleSubmit, formState: { errors } } = useForm<JobCreateForm>({
    resolver: yupResolver(schema),
    defaultValues:{
      'job_required_document':[{'name':''}],
      'is_active':false,
      'job_variant':'filter_only'
    },
    mode: "onBlur"
  });

  const { fields, append, remove} = useFieldArray({
    'name':'job_required_document',control
  })

  const onSubmit = (job:JobCreateForm)=>{
    let new_job:any = {...job}
    if(simpleMdeInstance){1
      // we get the data and put it in the json so we can send to the backemnd
      const description_content =  simpleMdeInstance.value().replace(/\n/g,'<br/>')
      new_job['description_content']=description_content
      mutate(new_job)
    }
   
  }

  console.log({errors})
  useEffect(()=>{
    setValue('description_content','...')
    setComponentHasMounted(true)
    setValue('is_active',false)

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
          options={listOfNigerianStates.map((data:string,index:number)=>{
            return (
              {
                'value':data,
              'name':data
              }
            )
          })}
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
          {
            fields.map((data,index)=>(
              <Box key={index} css={{'position':'relative','margin':'4px 0'}} >
                  <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>remove(index)}/>
                  <InputWithLabel label='Required Document'
                  register={register(`job_required_document.${index}.name`)}
                  errors={errors.job_required_document?.message}
                  />
              </Box>
            ))
          }
          <Button
          color={'lightBlueOutline'}
              type="button"
              onClick={(e) =>{
                e.preventDefault()
                append({'name':''})
              }}
            >Add</Button>
        <br />

    

          <Box css={{'position':'relative',}}>
          <SelectComponent 
          showLabel={true}
          label='Job Variant'
          options={[
            {'name':'filter Only','value':'filter_only'},
          {'name':'Filter and Test','value':'filter_and_test'},
          ]}
          setVaue={setValue}
          name='job_variant'
        />
          </Box>

        <br />
        {
          componentHasMounted?
          <>
            <label htmlFor="">Description</label>
            <GetInstance setInstance={setSimpleMdeInstance}/>
          </>
            :''
        }

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