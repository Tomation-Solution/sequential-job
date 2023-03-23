import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import LiveJobWithOtherContentLayout from "../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { get_job_detailApi, updateJobApi } from "../../../service/api/job.api";
import Preloader from "../../../shared/Preloader/Preloder";
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { JobCreateForm } from "../add-jobs";
import Box from "../../../shared/Box/Box";
import InputWithLabel from "../../../shared/InputWithLabel/InputWithLabel";
import Button from "../../../shared/Button/Button";
import { AiFillCloseCircle } from "react-icons/ai";
import CombineSelectAndInput from "../../../shared/CombineSelectAndInput/CombineSelectAndInput";
import EditorVersion2 from "../../../shared/EditorVersion2/EditorVersion2";
import money_countrySymbol from "../../../utils/money_countrySymbol";
import ControlEditSelect from "../../../shared/ControlEditSelect/ControlEditSelect";
import countries_and_state from "../../../utils/countries_and_state";
import useToast from "../../../hooks/useToastify";
import Switch from "../../../shared/Switch/Switch";


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
    job_variant:yup.string().required(),
    'country':yup.string().required(),
    'job_categories':yup.array().of(yup.string()),
  })
const JobUpdate:NextPage = ()=>{
    const route = useRouter();
    const { job_id } = route.query;
    const [enabled,setEnabled] = useState(false)
    const {notify} = useToast()
    const {data:jobdetail,isLoading} = useQuery(['job_detail',job_id],()=>get_job_detailApi(typeof job_id==='string'?parseInt(job_id):0),{
        enabled})
    const {mutate,isLoading:updating} = useMutation(updateJobApi,{
      'onSuccess':(data)=>{
        notify('Update Successfully','success')
      },
      'onError':(error:any)=>{
        console.log({error})
        if(error.response.data.error.error){
          notify(error.response.data.error.error,'error')
        }
      }
    })
    // const {} = useMutation()
    // const [editCountry,se]
    const { register,watch,getValues,control,setValue,handleSubmit, formState: { errors } } = useForm<JobCreateForm>({
        resolver: yupResolver(schema),
        // defaultValues:{
        //   'job_required_document':[{'name':''}],
        //   'is_active':false,
        //   'job_variant':'filter_only'
        // },
        mode: "onBlur"
        });
        const watchCoutry = watch('country')
        const watchIsLive = watch('is_active')
        const { fields, append, remove} = useFieldArray({
            'name':'job_required_document',control
          })
    useEffect(()=>{
        if(jobdetail){
            setValue('is_active',jobdetail.is_active)
            setValue('job_title',jobdetail.job_title)
            setValue('location',jobdetail.location)
            /* @ts-ignore*/
            setValue('job_type',jobdetail.job_type)
            setValue('country',jobdetail.country)

            setValue('country',jobdetail.country)
            setValue('job_variant',jobdetail.job_variant)

            setValue('salary',parseInt(jobdetail.salary))
            setValue('job_required_document',jobdetail.job_required_document.split(',').map(d=>({'name':d})))
            /* @ts-ignore*/
            setValue('currency',jobdetail.currency)

            setValue('job_categories',jobdetail.job_categories.split(','))
          setValue('description_content',jobdetail.description_content)

        }
    },[jobdetail])


    useEffect(()=>{
        if(typeof job_id == 'string'){
            setEnabled(true)
        }
    },[route.isReady])

    const onSubmit = (job:JobCreateForm) =>{
      if(typeof job_id ==='string'){
        mutate({
          'job_id':parseInt(job_id),
          ...job
        })
      }
    }
    const getState =()=>{
      let data;
      try{
        let selected_country = countries_and_state.countries.filter(d=>d.country===watchCoutry)[0]
       data= selected_country.states.map((data,indxe)=>({'name':data,'value':data}))

        // data=   selected_country.states.map((data,index)=>({'name':data,'value':data}))
      }
      catch(e:any){
        data= [{'name':'loading..','value':'Loading...'}]
      }
      
      return data
       
    }
    console.log({watchIsLive})
    return (
        <LiveJobWithOtherContentLayout
        header="Update Job"
        >
            <Preloader loading={isLoading ||updating} />

            <form onSubmit={handleSubmit(onSubmit)}>

            <InputWithLabel  label='Job Title'
        register={register('job_title')}
        errors={errors.job_title?.message}
        />

  {
    jobdetail?.country?
    <ControlEditSelect
    setValue={(name:string,value:string)=>{
       try{
        const data = JSON.parse(value)
        //this is were we set the new data
        setValue('country',data.country_name)
       }catch(err:any){
        //
       }
      }
    }
    label='Country'
    previous_value={jobdetail.country}
    name='country'
    options={
      countries_and_state.countries.map((data,index)=>{
        return {'name':data.country,'value':JSON.stringify({'country_name':data.country,'states':data.states}),}
      })
    }
    />:''
  }


{
    jobdetail?.location?
    <ControlEditSelect
    setValue={setValue}
    label='State'
    previous_value={jobdetail.location}
    name='location'
    options={getState()}
    setVaue={setValue}
    />:''
  }
<br />

  {
    jobdetail?.job_type?
    <ControlEditSelect
    setValue={setValue}
    label='Job Type'
    previous_value={jobdetail.job_type}
    name='job_type'
    options={[ {
        'name':'On Site',
        'value':'on_site'},
      {'name':'Remote','value':'remote'},]}
    setVaue={setValue}
    />:''
  }
<br />
          <label htmlFor="">Salary</label>
          <InputWithLabel 
          register={register('salary')}
          label={'Salary'}
          errors={errors.salary?.message}
          />
          <br />
          {
    jobdetail?.currency?
    <ControlEditSelect
    setValue={setValue}
    label='Currency'
    previous_value={jobdetail.currency}
    name='currency'
    options={
      money_countrySymbol.map((data,index)=>{
        return {'name':`${data.name} (${data.symbol})`,'value':data.symbol}
      }) }
    setVaue={setValue}
    />:''
  }
          
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


        {
          jobdetail?
<Switch  
  value={watchIsLive}
  onChange={(value)=>{
    setValue('is_active',!watchIsLive)
  }}
  label={watchIsLive?'Deactivate job':'Activate job'}
  />:''
        }

                    <br />
                    <br />
    {
      jobdetail?.description_content?
      <EditorVersion2 
      defualttext={jobdetail.description_content}
      onChangeFunc={(text)=>{
        // setDescriptionText(text)
        setValue('description_content',text)
      }}/>:''
    }
  <br />
            
<Button shape={'usual_btn_shap'} color={'lightBlueBtn'} css={{'width':'30%','margin':'15px auto'}}>Update</Button>
        <br />
        <br />
        <br />
        <br />

            </form>
        </LiveJobWithOtherContentLayout>
    )
}

export default JobUpdate

