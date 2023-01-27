import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useToast from '../../../../hooks/useToastify';
import GeneralLayout from '../../../../layout/GeneralLayout/GeneralLayout';
import Button from '../../../../shared/Button/Button';
import FormIntroContainer from '../../../../shared/FormIntroContainer/FormIntroContainer';
import FormIntroImageContainer from '../../../../shared/FormIntroImageContainer/FormIntroImageContainer';
import InputWithLabel from '../../../../shared/InputWithLabel/InputWithLabel';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm, SubmitHandler } from 'react-hook-form';
// import SvgRest from '../../../../assets/rest_password.svg'
import axios from 'axios';
import Preloader from '../../../../shared/Preloader/Preloder';
import { url } from '../../../../service/axios';
type FormType = {
  password:string;
  confirm_password:string;
}
const schema =yup.object().shape({
  password:yup.string().required(),
  confirm_password:yup.string().oneOf([yup.ref('password'),null],'Passwords must match'),
})

const ResetPasswordPage:NextPage = ()=>{
  const route = useRouter();
  const [isLoading,setIsLoading] = useState(false);
  const {uidb64, token} = route.query
  const {notify} = useToast()
  const [status,setStatus] = useState<'loading'|'error'|'okay'>('loading')
  const handleRoute = (value:string)=>{
    //
    route.push(value)
  }

  const { 
    register,setValue, 
    handleSubmit,control,
    formState: { errors },
  } = useForm<FormType>({ resolver: yupResolver(schema) });
  
  const onSubmit:SubmitHandler<FormType>=data=>{
    console.log(data)
    rest_password(data.password)
  }

  const rest_password =async (password:string)=>{
    setIsLoading(true)
 
    try{
      const resp = await axios.post(`${url}/mailing/reset_password/${uidb64}/${token}/`,{password})
      const response_data:any = resp.data
      console.log({response_data})
      if(response_data.status_code == 200){
        notify(response_data.message,'success')
        route.push('/signin')
      }
      setIsLoading(false)
    }
    catch(err:any){
      console.log(err)
      setIsLoading(false)
      if(err.response.status==400){
        notify('Bad Token Please Try to request for password again','error')
      }else{
        notify('Something went wrong please check your network','error')
      }
    }
  }


  return (
    <GeneralLayout>
      {/* <FormIntroImageContainer image={SvgRest.src}/> */}
      <FormIntroContainer heading={{
        phone:'Rest your password!',
        laptop:'Rest your password!'
      }}
      content={'Please Enter Your New Password'}
      />
      <Preloader loading={isLoading} />
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        style={{'maxWidth':'400px','margin':'0 auto','padding':'0 1rem'}}>
        <br />

        <InputWithLabel label='Password'
          register={register('password')}
          type='password' 
          errors={errors.password?.message}

        />
        <br />
        <InputWithLabel label='Confirm Password'
          register={register('confirm_password')}
          type='password' 
          errors={errors.confirm_password?.message}
        />
        <br />

        <Button>Update</Button>
        <br />
        <br />
        <br />
        <br />

      </form>

    </GeneralLayout>
  )
}

export default ResetPasswordPage