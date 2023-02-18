import { NextPage } from "next";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import InputWithLabel from "../shared/InputWithLabel/InputWithLabel";
import Pane from "../shared/Pane";
import Signupsvg from '../asset/signupsvg.svg'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Preloader from "../shared/Preloader/Preloder";
import { useMutation } from "react-query";
import { signInApi, signUpAsJobSeeker, signUpAsJobSeekerApi, UserType } from "../service/api/authentication/authentication.api";
import useToast from "../hooks/useToastify";
import { useRouter } from "next/router";
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import jwt_decode from "jwt-decode";
import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from "../shared/LoginContainerImg/LoginContainerImg.style";
import loginImage from '../asset/login.jpg'
import { useTheme } from "next-themes";
import { useEffect } from "react";
const cssStyleForInput = {
    'input':{
        // 'border':'1px solid '
        // 'backgroundColor':' rgba(242, 238, 252, 0.685);',
        'color':'$lightText',
        'border':'1px solid  #f2eefc0',
        '&:focus':{
            'border':'1px solid $lightBlue'
        }
    },
    'label':{
        color:'$lightText'
    }
}


const schema = yup.object({
    email:yup.string().email().required(),
    full_name:yup.string(),
    phone_number:yup.string(),
    'password':yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})
const JobSeekerSignup:NextPage =()=>{
    const { theme, setTheme } = useTheme();

    // const [cookie, setCookie] = useCookies(["user"])
    const {notify} = useToast()
    const route = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<signUpAsJobSeeker>({
        resolver: yupResolver(schema)
      });


      const  {isLoading,mutate} = useMutation(signUpAsJobSeekerApi,{
        'onSuccess':(resp)=>{
            notify(resp.message,'success')
            notify('Please Check Your Mail For Verification','success')
        },
        'onError':(error:any)=>{
           
            let  msg = ''
            const data:any = error.response.data
            if(data.error.email){
                // email already exist
                msg = data.error.email
            }
            if(data.error.organisation_name_shortname){
                // email already exist
              msg = data.error.organisation_name_shortname
            }

            notify(msg,'error')

        }
      })
      const onSubmit = (data: signUpAsJobSeeker) => {
        // console.log({data})
        mutate(data)
      }

      useEffect(()=>{
        
        setTheme('dark')
    },[])
    return (
            <Box css={{'backgroundColor':'$thickBlue','color':'$lightText '}}>
                <Preloader loading={isLoading}/>
            <LoginContainer>
                <LoginContainerImg  
                css={{'backgroundImage':`linear-gradient(to bottom, #24cce22d,black),url(${loginImage.src})`}}
                />

                <LoginContentContainer>

    <br /><br />
        <br /><br />
        <br /><br />
        <LoginNav>
          <h2>
          Create JobSeeker Account
          </h2>
          <div>
            <a onClick={()=>route.push('/')}>Go Home</a>
            <a onClick={()=>route.push('/signin')}>Sign in</a>
          </div>
        </LoginNav>   

        <form onSubmit={handleSubmit(onSubmit)} >
        <InputWithLabel 
        register={register('email')}
        errors={errors.email?.message}
        label="Email" css={cssStyleForInput}/>
        <br />
<InputWithLabel 
        register={register('full_name')}
        errors={errors.full_name?.message}
        label="Full name" css={cssStyleForInput}/>
        <br />
        <InputWithLabel 
        register={register('phone_number')}
        errors={errors.phone_number?.message}
        label="Phone Number" css={cssStyleForInput}/>
        <br />

        <InputWithLabel 
        register={register('password')}
        errors={errors.password?.message}
        label="Password" css={cssStyleForInput}/>
        <br />
        <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between','button':{
            'width':'35%'
        }}}>
        <Button >Submit</Button>
        <Button type='button' 
        color='lightBlueOutline'
        onClick={()=>{
            route.push('/signup')
        }}>Sign up as organisation</Button>
        </Box>

        <br />
        </form>
</LoginContentContainer>


            </LoginContainer>
            </Box>
    )
}

export default JobSeekerSignup



