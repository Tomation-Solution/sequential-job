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
import { signInApi, UserType } from "../service/api/authentication/authentication.api";
import useToast from "../hooks/useToastify";
import { useRouter } from "next/router";
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import jwt_decode from "jwt-decode";
import { LoginContainer, LoginContainerImg, LoginContentContainer, LoginNav } from "../shared/LoginContainerImg/LoginContainerImg.style";
import loginImage from '../asset/login.jpg'
import { useTheme } from "next-themes";
import { useEffect } from "react";


export const cssStyleForInput = {
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

type SignInType = {
    email:string;
    password:string;
}
const schema = yup.object({
    email:yup.string().email().required(),
    password:yup.string(),
})
const Signin:NextPage =()=>{
    // const [cookie, setCookie] = useCookies(["user"])
    const { theme, setTheme } = useTheme();

    const {notify} = useToast()
    const route = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<SignInType>({
        resolver: yupResolver(schema)
      });


      const  {isLoading,mutate} = useMutation(signInApi,{
        'onSuccess':(resp)=>{
            notify(resp.message,'success')
            // localStorage.setItem('tokens',resp.tokens)
            //delete cookie
            // cookieCutter.set('user','',resp.tokens)
            cookieCutter.set('user',JSON.stringify(resp.data.tokens))
            const userInfo:UserType =  jwt_decode(resp.data.tokens.access)
            if(userInfo.user_type ==='panelist'){
                route.push('/panelist/')
            }else{
                route.push('/dashboard_index')
            }
        },
        'onError':(error:any)=>{
            console.log(error)
            const data:any = error.response.data
            notify(data.message,'error')
        }
      })
      const onSubmit = (data: SignInType) => {
        // mutate(data)
        console.log(data)
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
            <h2>Sign In</h2>
            <div>
            <a onClick={()=>route.push('/')}>Go Home</a>
            <a onClick={()=>route.push('/job_seeker_signup')}>Sign Up</a>
            </div>
            </LoginNav>   

            <form onSubmit={handleSubmit(onSubmit)} >
            <InputWithLabel 
            register={register('email')}
            errors={errors.email?.message}
            label="Email" css={cssStyleForInput}/>
            <br />
            <InputWithLabel 
            register={register('password')}
            errors={errors.password?.message}
            label="Password" css={cssStyleForInput}/>
            <br />
            <Button shape={'usual_btn_shap'} css={{'margin':'0 auto'}}>Submit</Button>

            <br />
            </form>
            </LoginContentContainer>


            </LoginContainer>
            </Box>
    )
}

export default Signin



