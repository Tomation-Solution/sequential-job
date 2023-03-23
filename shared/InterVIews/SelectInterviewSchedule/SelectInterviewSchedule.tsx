import React, { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";
import { useMutation, useQuery } from 'react-query'
import { InterviewProp, InterViewSetUpApi } from '../../../service/api/interview.api'
import Box from '../../Box/Box'
import Button from '../../Button/Button'
import InputWithLabel from '../../InputWithLabel/InputWithLabel'
import SelectComponent from '../../Select/Select'
import InterviewDateSelect from '../InterviewDateSelect/InterviewDateSelect'
import { get_jobs_api } from '../../../service/api/job.api';
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import {AiFillCloseCircle} from 'react-icons/ai'
import Preloader from '../../Preloader/Preloder';
import useToast from '../../../hooks/useToastify';
import { useRouter } from 'next/router';










const schema = yup.object({
  job_id:yup.number().required(),
  list_of_available_dates:yup.array().of(yup.object({
      'available_dates':yup.string().required(),
  })),
  list_of_available_time:yup.array().of(yup.object({
    'available_time':yup.string().required(),
})),
  rating_sheet:yup.array().of(yup.object({
      'name':yup.string().required(),
      'cut_off':yup.number().required(),
  })),
  list_of_email:yup.array().of(yup.object({
      'email':yup.string().required(),
  })),
})


const SelectInterviewSchedule = ():React.ReactElement => {

  const [step,setStep] = useState(1)
  const {notify} = useToast()
  const route = useRouter()

  const {isLoading,error,data,isError} = useQuery('jobs',()=>get_jobs_api({'is_active':true}),{
    refetchOnWindowFocus: false,
  })
  const {isLoading:submitting,mutate} = useMutation(InterViewSetUpApi,{
    'onSuccess':(data)=>{
      console.log({'resp':data})
      notify('Created Successfully','success')
      route.push('/dashboard_index')
    },
    'onError':(error)=>{
      console.log({error})
      notify('Something Went Wrong','error')
    }
  });
  const { register,control, handleSubmit, setValue,formState: { errors } } = useForm<InterviewProp>({
      resolver: yupResolver(schema),
      defaultValues:{
        list_of_available_dates:[],
        rating_sheet:[{'name':'Basic Knowledge','cut_off':20}],
        list_of_email:[],
        list_of_available_time:[]
      },
      mode: "onBlur"
    });
    const { fields, append, remove} = useFieldArray({
      name:'list_of_available_dates',control
    })
    const { fields:listOfAvailableTimeFields, append:appendAvailableTime, remove:removeAvailableTime} = useFieldArray({
      name:'list_of_available_time',control
    })

    const { fields:ratingSheet, append:appendRatingSheet, remove:removeRatingSheet} = useFieldArray({
      name:'rating_sheet',control
      })
  

    const { fields:listOfEmail, append:appendEmail, remove:removeEmail} = useFieldArray({
    name:'list_of_email',control
    })


    const onSubmit = (data: InterviewProp) =>{
      console.log({'submitted':data})
      mutate(data)
    };


    useEffect(()=>{
      // console.log({errors})
        if(errors.job_id?.message){
          notify('Please Select Job You setting the Interview for','error')
        }

        if(errors.list_of_available_dates?.message){
          notify('Please Check Date you did not select all','error')
        }

        if(errors.list_of_available_time?.message){
          notify('Please Check Time you did not select all','error')
        }
        
        if(errors.rating_sheet?.message){
          notify('Rating Sheet is required','error')
        }
        
        if(errors.list_of_email?.message){
          notify('Panelist email is required','error')
        }
 
        
      },[errors])

  return (
    <Box>
        <h2>{
          (step==1)?'Set Up Interview Date':(step ===2)?'Set Up Interview Rating Scale':'Set Up Interview Panelist'
          }</h2>
<br /><br />

<Preloader 
loading={isLoading || submitting}
/>

<form  onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <SelectComponent
        showLabel={true}
        label='Please Select Job'
        setVaue={setValue}
        name='job_id'
        options={data?data.map((job,index)=>{
          return {'name':job.job_title,'value':`${job.id}`}
        }):[]}
        />
      <br />
          <br />

          {step===1?
          <Box>


<label htmlFor="">Set Available date  for candidates to pick from:</label>
          <br />
          <br />
          <p>Dates Selected</p>
          <br />
          <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
            {
              fields.map((data,index)=>(
                <Box css={{'position':'relative'}}  key={index}>
                  <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>remove(index)}/>
                  <InputWithLabel label='' show_label={false} type='date' register={register(`list_of_available_dates.${index}.available_dates`)}
                  />
                </Box>
              ))
            }       
          
          </Box>
          <br />
          <Button
          color={'lightBlueOutline'}
              type="button"
              onClick={(e) =>{
                e.preventDefault()
                append({'available_dates':''})
              }}
            >Add</Button>
            
    <br />
          <br />
          <p>Time Selected</p>
          <br />
          
          <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
            {listOfAvailableTimeFields.map((data,index)=>(
              
              <Box css={{'position':'relative'}} 
              key={index}
              >
              <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>removeAvailableTime(index)}/>
              <InputWithLabel label='' show_label={false} type='time' register={register(`list_of_available_time.${index}.available_time`)}
              />
            </Box>
          ))}
          </Box>
    <br />
          <Button
          color={'lightBlueOutline'}
              type="button"
              onClick={(e) =>{
                e.preventDefault()
                appendAvailableTime({'available_time':''})
              }}
            >Add</Button>
          


          </Box>:''
        }

          <br />
          <br />

          {
            step ===2 ?
            <Box>


      <label htmlFor="">Set Criteria  and  Point obtainable:</label>
      <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px',}}>
            {
              ratingSheet.map((data,index)=>(
                <Box 
                key={index}
                css={{'position':'relative','display':'grid','gridTemplateColumns':'1fr 1fr 5%','gap':'10px 6px',
                'alignItems':'center','justifyContent':'center'}}> 
                  {/* <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>remove(index)}/> */}
                  <InputWithLabel label='Criteria' register={register(`rating_sheet.${index}.name`)}
                  />
                  <InputWithLabel label='Point obtainable'   register={register(`rating_sheet.${index}.cut_off`)}
                  />
                <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>removeRatingSheet(index)}/>
                </Box>
              ))
            }       
          
          </Box>
          <br />
          <Button
          color={'lightBlueOutline'}
              type="button"
              onClick={(e) =>{
                e.preventDefault()
                appendRatingSheet({'name':'Title Of Doings','cut_off':10})
              }}
            >Add</Button>

            </Box>:''
          }
     
          <br />
          {
            step==3?
            <Box>

<p>
          Invite member of Panel 
          </p>
          <br />
          <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
            {listOfEmail.map((data,index)=>(
              <Box css={{'position':'relative'}}
              key={index}
              >
              <AiFillCloseCircle style={{'color':'crimson','cursor':'pointer'}} onClick={(e:any)=>removeEmail(index)}/>
              <InputWithLabel label='' show_label={false}  register={register(`list_of_email.${index}.email`)}
              />
            </Box>
          ))}
          </Box>
          <br />
          <Button color={'whiteBtn'} css={{'width':'80%','padding':'1rem'}}
          onClick={(e)=>{
            appendEmail({'email':'dummy@mail.com'})
          }}
          type="button"
          >
          {'  '} Add Email Address
          </Button>

          <br />
            </Box>
            :''
          }
          
          <Box css={{'display':'flex','justifyContent':'space-between','maxWidth':'400px','margin':'0 auto'}}>
          
          {
            step!==1?
            <Button color={'whiteBtn'}
            css={{'width':'40%'}}
            onClick={(e)=>{
              e.preventDefault()
              setStep(step-1)
            }}
            >Previous</Button>:''
          }
          {
            step==3?
            <Button
            css={{'width':'40%'}}
            >Submit</Button>
            :
            <Button 
            css={{'width':'40%'}}
            color={'whiteBtn'} type='button'  
            onClick={(e)=>{
              e.preventDefault()
              setStep(step+1)
            }}>Next</Button>
          }

          </Box>
    </Box>
  </form>
    </Box>
  )
}


export default SelectInterviewSchedule