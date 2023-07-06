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
import countries_and_state  from '../../utils/countries_and_state'
import money_countrySymbol from '../../utils/money_countrySymbol'
import EditorVersion2 from '../../shared/EditorVersion2/EditorVersion2'
import job_categories from '../../utils/job_categories'
import { useTheme } from "next-themes";
import ControlEditSelect from '../../shared/ControlEditSelect/ControlEditSelect'
import numbro from "numbro";
import WysiwygEditor from '../../shared/WysiwygEditor'


export type JobCreateForm = {
  'job_title':string;
  'is_active':boolean;
  'location':string;
  'job_type':'on_site'|'hybrid'|'remote';
  'salary':number;
  'currency':'string',
  'job_required_document':{'name':string}[];
  'description_content':string;
  job_variant:'filter_only'|'filter_and_test',
  country:string;
  job_categories:string[];

}

const schema = yup.object({
  'job_title':yup.string().required(),
  'is_active':yup.boolean() ,
  'location':yup.string().required(),
  'job_type':yup.string().required(),
  'salary':yup.string(),
  'currency':yup.string().required(),
  'job_required_document':yup.array().of(yup.object({
    'name':yup.string().required(),
  })),
  // 'description_content':yup.string(),
  job_variant:yup.string().required(),
  'country':yup.string().required(),
  'job_categories':yup.array().of(yup.string())
})
const AddJobs = () => {
  const { theme, setTheme } = useTheme();
  const [componentHasMounted,setComponentHasMounted] = useState(false)
  const route = useRouter() 
  const {notify} = useToast();
  const [ListOfStates,setListOfStates] = useState<string[]>([]);
  const [jobdetail, setJobdetail] = useState('')
  const [showPreview, setShowPreview] = useState(false);
      
  const  {isLoading,mutate} = useMutation(create_job_api,{
    onError:(error:any)=>{
      console.log({'endpoint Error':error})
    },
    onSuccess:(data, variables, context)=>{
        console.log({'success':data})
        if(data.status==201){
          notify(`"${data.data.job_title}" Successful`,'success')
          route.push('/dashboard_index')
        }
    },
  })
  const [descriptionText,setDescriptionText] = useState('')

  const { register,watch,control,setValue,handleSubmit, formState: { errors } } = useForm<JobCreateForm>({
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
  const watchJobCategories = watch('job_categories')
  const onSubmit = (job:JobCreateForm)=>{
    let new_job:any = {...job,'salary':parseInt(
      numbro(job.salary).format({thousandSeparated: false}))//converted it to the number figure the backend needs
    }
    new_job['description_content']=jobdetail
    // console.log(new_job)
    mutate(new_job)

   
  }

  console.log({errors})
  useEffect(()=>{
    setValue('description_content','...')
    setComponentHasMounted(true)
    setValue('is_active',false)
    setValue('job_categories',[])

  },[])

  useEffect(()=>{
    if(errors.job_categories?.message){
      notify('Please pick at least one category','error')
    }
    if(errors.currency?.message){
      notify('Please pick at least one currency type','error')
    }
  },[errors])
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
          label='Country'
          setVaue={(name:string,value:string)=>{
            const data = JSON.parse(value)
            setValue('country',data.country_name)
            setListOfStates(data.states)
          }}
          name='country'
          options={
          countries_and_state.countries.map((data,index)=>{
            return {'name':data.country,'value':JSON.stringify({'country_name':data.country,'states':data.states}),}
          })
        }
        />
    <br />

         <SelectComponent 
          showLabel={true}
          label='State'
          setVaue={setValue}
          name='location'
          options={
            ListOfStates.map((data,index)=>{
            return {'name':data,'value':data}
          })
        }
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
          <CombineSelectAndInput
          select_name='currency'
          select_setValue={setValue}
          select_options={
          //   [
          //   {'name':'Dollar','value':'dollar'},
          //   {'name':'Naira','value':'naira'},
          //   {'name':'Pounds','value':'pounds'},
          //   {'name':'Sterlin','value':'sterlin'},
          // ]
          money_countrySymbol.map((data,index)=>{
            return {'name':`${data.name} (${data.symbol})`,'value':data.symbol}
          })
        }
          // for the input field
          inputLabel={'salary'}
          inputRegister={register('salary',{
            'onChange':(e)=>{
              console.log(e.target.value)
              if(e.target.value){
                let value = e.target.value
                try{
                    numbro(value??0).format({thousandSeparated: true})
                    // @ts-ignore
                    setValue('salary', numbro(value??0).format({thousandSeparated: true}))
                }catch(err:any){
                    // toast.error('invalid number')
                }
            }
              
            }
          })}

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
        {/* {
          componentHasMounted?
          <Box css={{
            'color':'$lightText !important'
          }}>
            <label htmlFor="">Description</label>
            <GetInstance setInstance={setSimpleMdeInstance}/>
          </Box>
            :''
        } */}
        {/* <br />
        <br />
          <label htmlFor="job_categories">Pick at least one category</label>

        <Box  css={{
          //  border:'1px solid $white',
           'display':'flex','flexWrap':'wrap','minWidth':'500px',
           '@bp2':{
            // 'width':'700px'
           },
           'p':{
            'padding':'.5rem','cursor':'pointer',
            'border':'1px solid $white',
            // 'backgroundColor':'white','color':'black'
            // 'backgroundColor':'black','color':'white'
           }
        }}>
          {job_categories.map((category,index)=>(
            <p
            style={watchJobCategories?.includes(category)?{'backgroundColor':theme=='dark'?'black':'white','color':theme==='dark'?'white':'black'}:{}}
            onClick={(e)=>{
              if(watchJobCategories.includes(category)){
                setValue('job_categories',watchJobCategories.filter(d=>d!==category))
              }else{
                setValue('job_categories',[...watchJobCategories,category])
              }
            }}
             key={index}>{category}</p>
          ))}
        </Box> */}
<br />

              <WysiwygEditor
                    content={jobdetail}
                    setContent={setJobdetail}
                    showPreview={showPreview}
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