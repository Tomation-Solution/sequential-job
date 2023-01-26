import { NextPage } from 'next';
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout';
import ForgotPasswodSvg from '../../assets/forgot_password.svg'
import InputWithLabel from '../../shared/InputWithLabel/InputWithLabel';
import Button from '../../shared/Button/Button';
import api ,{url}from '../../service/axios';
import { useState } from 'react';
import useToast from '../../hooks/useToastify';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import Preloader from '../../shared/Preloader/Preloder';
import axios from 'axios';
import FormIntroImageContainer from '../../shared/FormIntroImageContainer/FormIntroImageContainer';
import FormIntroContainer from '../../shared/FormIntroContainer/FormIntroContainer';
import {SignUpFormType  } from '../../pages/signup'



const schema = yup.object().shape({
  'email':yup.string().required().email(),
})
type FormType = {
    email:string;
}
const SendResetPasswordMail:NextPage = ()=>{
  const [isLoading,setIsLoading] = useState(false);
  const {notify} = useToast()


  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });


  const requestForgotpassword = async (data:FormType)=>{


    setIsLoading(true)
    try{
      const resp = await axios.post(url+'/mailing/request_forgot_password/',data);
      const response_data:any = resp.data
      if(response_data.status_code == 200){
        notify(response_data.message,'success')
      }
      setIsLoading(false)
    }
    catch(err:any){
      setIsLoading(false)
      notify('Please Check Your Internet The Mail did not send','error')
    }
  }

  const onSubmit: SubmitHandler<FormType>=data=>{
    console.log(data)
    requestForgotpassword(data)
  }
  return (
    <GeneralLayout>
      <FormIntroImageContainer image={ForgotPasswodSvg.src}/>
      <FormIntroContainer heading={{
        phone:'Lost your password? ',
        laptop:'Lost your password? '
      }}
      content={'Enter your details to proceed futher'}
      />
      <Preloader loading={isLoading} />
      <form 
        onSubmit={handleSubmit(onSubmit)} style={{'maxWidth':'400px','margin':'0 auto','padding':'0 1rem'}}>

        <InputWithLabel label='' register={register('email')}/>
        <Button css={{'width':'40%','margin':'10px auto'}}>Recover</Button>
      </form>
    </GeneralLayout>
  )
}

export default SendResetPasswordMail