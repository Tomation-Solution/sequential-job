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


const cssStyleForInput = {
    'input':{
        // 'border':'1px solid '
        'backgroundColor':' rgba(242, 238, 252, 0.685);',
        'color':'$thickBlue',
        'border':'1px solid  #f2eefc0',
        '&:focus':{
            'border':'1px solid $lightBlue'
        }
    },
    'label':{
        color:'$thickBlue'
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
    return (
        <GeneralLayout remove_nav={true}>
            <Preloader loading={isLoading}/>
              <Box css={{'maxWidth':'400px','margin':'0 auto'}}>
               <img src={Signupsvg.src} alt="" style={{'width':'50%','display':'block','margin':'0 auto'}} />


                <Box css={{'h1':{
                        'color':'$white','padding':'.6rem'},
                        'p':{
                            'color':'rgba(242, 238, 252, 0.54)'},
                            'textAlign':'center'
                    }}>
                        <h1>Sign In</h1>
                        <p>Organization</p>
                    </Box>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Pane>
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
                    <Button css={{'margin':'0 auto'}}>Submit</Button>
                    </Pane>

                    <br />
                </form>
                    <Button color={'lightBlueOutline'} 
                    onClick={()=>route.push('/signup')}
                    css={{'margin':'0 auto'}}>Sign Up</Button>

              </Box>
        </GeneralLayout>
    )
}

export default Signin