import { UpdateCompanyProfileApiProp, update_company_profile_api, UserProfile } from "../../service/api/profile.api"
import Box from "../Box/Box"
import Button from "../Button/Button"
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect } from "react";
import { useMutation } from "react-query";
import Preloader from "../Preloader/Preloder";
import useToast from "../../hooks/useToastify";

type Prop ={
    defualtValue:UserProfile
}

const schema =  yup.object({
    full_name:yup.string(),
    phone_number:yup.number(),
    organisation_name:yup.string(),
    industry:yup.string(),
    organisation_size:yup.number(),
    location:yup.string(),
    official_mail:yup.string(),
    addresses:yup.string(),
    official_phone:yup.string(),
})
const CompanyProfileForm = ({defualtValue}:Prop):React.ReactElement=>{

    const {notify} = useToast()
    const { register,setValue, handleSubmit, formState: { errors } } = useForm<UpdateCompanyProfileApiProp>({
        resolver: yupResolver(schema)
      });
      const {mutate ,isLoading } = useMutation(update_company_profile_api,{
        'onSuccess':(data)=>{
            notify('Updated SuccessFully','success')
        }
      })
      const onSubmit = (data: UpdateCompanyProfileApiProp) =>{
        console.log({'JustSubmited Data':data})

        mutate(data)
      }
    useEffect(() => {
      
        setValue('full_name',defualtValue.full_name)
        setValue('phone_number',defualtValue.phone_number)
        if(defualtValue.user_extra.company){
            setValue('organisation_name',defualtValue.user_extra.company.organisation_name)
            setValue('industry',defualtValue.user_extra.company.industry)
            setValue('organisation_size',defualtValue.user_extra.company.organisation_size)
            setValue('location',defualtValue.user_extra.company.location)
            setValue('official_mail',defualtValue.user_extra.company.official_mail)
            setValue('addresses',defualtValue.user_extra.company.addresses)
            setValue('official_phone',defualtValue.user_extra.company.official_phone)
        }
      
    }, [])
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Preloader loading={isLoading}/>
        <InputWithLabel
        register={register('full_name')}
            label="full_name"
        />
           <InputWithLabel
           register={register('phone_number')}
            label="phone_number"
        />
           <InputWithLabel
            label="organisation_name"
            register={register('organisation_name')}
        />
        <InputWithLabel
        register={register('industry')}
            label="industry"
        />
        <InputWithLabel
        label="organisation_size"
        register={register('organisation_size')}
        />

<InputWithLabel
            label="location"
            register={register('location')}
        />
        <InputWithLabel
            label="official_mail"
            register={register('official_mail')}

        />

<InputWithLabel
            label="addresses"
            register={register('addresses')}

        />

<InputWithLabel
            label="official_phone"
            register={register('official_phone')}

        />
        <br />
        <Button css={{'margin':'0 auto'}}>Update</Button>
    </form> 
    )
}

export default CompanyProfileForm