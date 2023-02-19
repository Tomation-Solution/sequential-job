import { UserProfile,updatePanelistProfileApi, updatePanelistProfileProp } from "../../service/api/profile.api"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useToast from "../../hooks/useToastify";
import { useEffect, useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import Box from "../Box/Box";
import { useMutation } from "react-query";
import Preloader from "../Preloader/Preloder";


type Prop ={
    defualtValue:UserProfile
}
const schema =  yup.object({
    full_name:yup.string(),
    phone_number:yup.number(),
})

const PanelistProfileForm = ({defualtValue}:Prop):React.ReactElement=>{
    const {notify} = useToast();
    const {mutate,isLoading} = useMutation(updatePanelistProfileApi,{
        onSuccess:(data)=>{
            notify('Update Successfully','success')

        },
        onError:(error)=>{
            console.log({error})
        }
    })

    const { register,setValue, handleSubmit, formState: { errors } } = useForm<updatePanelistProfileProp>({
        resolver: yupResolver(schema)
      });

    
    const onSubmit = (data: updatePanelistProfileProp)=>{
        // console.log({data})
        mutate(data)
    }

    useEffect(()=>{
        setValue('full_name',defualtValue.full_name)
        setValue('phone_number',defualtValue.phone_number)

      
      },[])


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <InputWithLabel
            register={register('full_name')}
            label="full name"
            />
            <InputWithLabel
            register={register('phone_number')}
            label="phone number"
            />
            <br />
            
            <Button css={{'margin':'0 auto'}}>Update</Button>

        </form>
    )
}

export default PanelistProfileForm