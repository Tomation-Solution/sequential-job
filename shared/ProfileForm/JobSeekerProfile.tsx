import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { UpateJobSeekerPropType, updateJobseekerApi, UserProfile } from "../../service/api/profile.api";
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
   cv:yup.mixed(),
})

const JobSeekerProfile = ({defualtValue}:Prop)=>{

    const {notify} = useToast();
    const [hasCv,setHasCv] = useState(false)
    const {mutate,isLoading} = useMutation(updateJobseekerApi,{
        onSuccess:(data)=>{
            notify('Update Successfully','success')

        },
        onError:(error)=>{
            console.log({error})
        }
    })
    const { register,setValue, handleSubmit, formState: { errors } } = useForm<UpateJobSeekerPropType>({
        resolver: yupResolver(schema)
      });


      const onSubmit = (data: UpateJobSeekerPropType)=>{
        console.log({data})
        mutate(data)
    }


      useEffect(()=>{
        setValue('full_name',defualtValue.full_name)
        setValue('phone_number',defualtValue.phone_number)

        if(defualtValue.user_extra?.job_seakers){
            setHasCv(true)
            // setValue('cv',defualtValue.user_extra.job_seakers.cv)
        }

      },[])

console.log({errors})
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Preloader loading={isLoading}/>
  <InputWithLabel
        register={register('full_name')}
            label="full_name"
        />
           <InputWithLabel
           register={register('phone_number')}
            label="phone_number"
        />
        <br />
        {
            hasCv?
            <Box>
                <label htmlFor="">CV</label>
                <br />
                <p><strong>current</strong>:{' '}<a href={defualtValue.user_extra?.job_seakers?.cv} target='_blank'>View</a></p>
                <p><strong>change</strong>:{' '}<input type="file" 
                name="" id="" 
                onChange={(e)=>{
                    if(e.target.files){
                        setValue('cv',e.target.files[0])
                    }
                }}
                /></p>
            </Box>:''

        }
        <br />
        
        <Button css={{'margin':'0 auto'}}>Update</Button>

        </form>
    )
}

export default JobSeekerProfile