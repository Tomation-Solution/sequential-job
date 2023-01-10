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
import { signUpApi } from "../service/api/authentication/authentication.api";
import useToast from "../hooks/useToastify";
import { useRouter } from "next/router";
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

export type SignUpFormType = {
    "email":string,
    "full_name":string,
    "password":string,
    "phone_number":string,
    "organisation_name":string,
    "industry":string,
    "addresses":string,
    "official_phone":string,
    "organisation_name_shortname":string,
    'passwordConfirmation':string
}


const schema = yup.object({
    'email':yup.string().required(),
    'full_name':yup.string().required(),
    'phone_number':yup.string().required(),
    'organisation_name':yup.string().required(),
    'industry':yup.string().required(),
    'addresses':yup.string().required(),
    'official_phone':yup.string().required(),
    'organisation_name_shortname':yup.string().required(),
    'password':yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    
})
const Signup:NextPage =()=>{

    const {notify} = useToast()
    const route = useRouter()
    const  {isLoading,mutate} = useMutation(signUpApi,{
        'onSuccess':(data)=>{
            notify('Account Created Successfully','success')
            console.log({'success':data})

            route.push('signin')
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
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormType>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: SignUpFormType) => {
        mutate(data)
      }
    return (
        <GeneralLayout remove_nav={true}>
            <Preloader loading={isLoading}/>
            {/* <InputWithLabel label="Organization Name"/> */}
              <Box css={{'maxWidth':'600px','margin':'0 auto'}}>
               {/* <img src={Signupsvg.src} alt="" style={{'width':'90%'}} /> */}


                <Box css={{'h1':{
                        'color':'$white','padding':'.6rem'},
                        'p':{
                            'color':'rgba(242, 238, 252, 0.54)'},
                            'textAlign':'center'
                    }}>
                        <h1>Sign Up</h1>
                        <p>Organization</p>
                    </Box>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Pane>
                    <InputWithLabel label="Full Name" 
                        errors={errors.full_name?.message}
                        register={register('full_name')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Addresse" 
                        errors={errors.addresses?.message}
                        register={register('addresses')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Organization Name" 
                        errors={errors.organisation_name?.message}
                        register={register('organisation_name')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Industry"
                        errors={errors.industry?.message}
                        register={register('industry')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Organization Short Name" 
                        register={register('organisation_name_shortname')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Email Address(Official)"
                        errors={errors.email?.message}
                        register={register('email')}
                        css={cssStyleForInput}/>

                        <br />
                        <InputWithLabel 
                        register={register('official_phone')}
                        errors={errors.official_phone?.message}
                        label="Phone Number(Official)" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Phone Number (Personal)"
                        errors={errors.phone_number?.message}
                        register={register('phone_number')}
                        css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Password" 
                        type='password'
                        errors={errors.password?.message}
                        register={register('password')} css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Confirm Password"
                        errors={errors.passwordConfirmation?.message}
                        register={register('passwordConfirmation')} css={cssStyleForInput}/>
                               <br />
                    <Button css={{'margin':'0 auto'}} >Submit</Button>
                    </Pane>
                    <br />
                    <Button color={'lightBlueOutline'} css={{'margin':'0 auto'}}>Sign In</Button>
                </form>

              </Box>
        </GeneralLayout>
    )
}

export default Signup