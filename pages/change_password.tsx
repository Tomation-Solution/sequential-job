import { NextPage } from "next";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import InputWithLabel from "../shared/InputWithLabel/InputWithLabel";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Preloader from "../shared/Preloader/Preloder";
import { useMutation } from "react-query";
import { change_password_api } from "../service/api/authentication/authentication.api";
import useToast from "../hooks/useToastify";



export type PasswordChangeFormType ={
    password:string;
    passwordConfirmation:string
}
const schema = yup.object({
    'password':yup.string().required('Password is required'),
    passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
})
const ChangePassword:NextPage = ()=>{
    const {notify} = useToast()
    const {mutate ,isLoading }  = useMutation(change_password_api,{
        'onSuccess':(data)=>{
            notify('Password Change success','success')
        },
        'onError':(data)=>{
            notify('Password change error please try again','error')
        }
    })
    const { register, handleSubmit, formState: { errors } } = useForm<PasswordChangeFormType>({
        resolver: yupResolver(schema)
      });
      const onSubmit = (data: PasswordChangeFormType) =>mutate(data)

    return (
        <GeneralLayout>
            <Box css={{'maxWidth':'500px','margin':'0 auto','color':'$lightText','h1':{'textAlign':'center'}}}>
                    <h1 >Change Your Password</h1>
        <Preloader loading={isLoading}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputWithLabel  
                        errors={errors.password?.message}
                        label="New Password" register={register('password')}/>
                        <br />
                        <InputWithLabel  
                        errors={errors.passwordConfirmation?.message}
                        label="Confirm Password" register={register('passwordConfirmation')}/>
                        <br />
                        <Button shape={'usual_btn_shap'} css={{'margin':'0 auto'}}>
                            Update
                        </Button>
                    </form>
            </Box>
        </GeneralLayout>
    )
}

export default ChangePassword