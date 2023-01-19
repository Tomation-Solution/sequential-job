import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import LiveJobWithOtherContentLayout from "../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { getCutOffForQuetion, setCutOffForQuetion } from "../../../../service/api/job.api";
import Box from "../../../../shared/Box/Box";
import Button from "../../../../shared/Button/Button";
import Preloader from "../../../../shared/Preloader/Preloder";
import WhiteInput from "../../../../shared/WhiteInput/WhiteInput";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import useToast from "../../../../hooks/useToastify";


type ApplicationSortingTypeForm = {
    "suitable": number,
    "end_suitable": number,
    "partially_suitable": number,
    "end_partially_suitable": number,
    "not_suitable": number,
    "end_not_suitable": number,
}

const schema = yup.object({
    'suitable':yup.number(),
    'end_suitable':yup.number(),
    'partially_suitable':yup.number(),
    'end_partially_suitable':yup.number(),
    'not_suitable':yup.number(),
    'end_not_suitable':yup.number(),
})
const ApplicationSorting:NextPage = ()=>{
    const route = useRouter();
    const {notify} = useToast()
    const [enable_getting_info,setEnableGettingInfo] = useState(false)// this will only enable when the url params are availabe
    const { quetion_id } = route.query
    const {isLoading , data,status} = useQuery(['cut_off_mark',quetion_id],()=>getCutOffForQuetion(typeof quetion_id== 'string'?quetion_id:'0'),{
        enabled:enable_getting_info
    })
    const { register,setValue, handleSubmit, formState: { errors } } = useForm<ApplicationSortingTypeForm>({
        resolver: yupResolver(schema)
      });
    
    const {isLoading:submittingStatus,mutate}  = useMutation(setCutOffForQuetion,{
        'onSuccess':(data)=>{
                console.log(data)
            notify('Updated Successfully','success')

        },
        'onError':(error)=>{
            console.log({error})
            notify('Please Refresh The Page Some Error Occured','error')
        }
    })

    useEffect(()=>{
        if(typeof quetion_id == 'string'){
            //we can now use id to get the data
            setEnableGettingInfo(true)
        }
    },[route.isReady])

    useEffect(()=>{
        if(status=='success'){
            if(data){
                setValue('suitable',data.suitable)
                setValue('end_suitable',data.end_suitable)
                setValue('end_not_suitable',data.end_not_suitable)
                setValue('not_suitable',data.not_suitable)
                setValue('partially_suitable',data.partially_suitable)
                setValue('end_partially_suitable',data.end_partially_suitable)
            }
        }
    },[status,isLoading])
    const onSubmit = (submited_data: ApplicationSortingTypeForm)=>{
        console.log({submited_data})
        if(typeof quetion_id == 'string'){
            mutate({...submited_data,'id':parseInt(quetion_id)})
        }
    }
    
    return (    
        <LiveJobWithOtherContentLayout
    header=''
        >
            <Preloader loading={isLoading ||submittingStatus}/>
            <Box css={{
                'color':'$white','fontSize':'.8rem','maxWidth':'600px','margin':'0 auto',
                '@bp2':{
                    'fontSize':'1.1rem',
                    'p':{
                        'fontSize':'1rem'
                    }
                }
                }}>
            <Box css={{
                'textAlign':'center',
                'h2':{
                    'padding':'1rem 0','textAlign':'center'
                },
                
            }}>
                <h2>Applicant Sorting</h2>
                <p>In other to ease the recruiutment selection process, It is important that you set a pre-test that would help sort out qualified candidates during application submission.</p>
            </Box>
            <br />
            <br />

            <Box css={{'& div':{
                'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'20px 0'
            },'maxWidth':'500px','margin':'0 auto','h2':{
                'textAlign':'center'
            }}}>
                
                <h2>Set Cut Off for:{' '}{data?.title}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                        <p> Not Suitable </p>
                        <WhiteInput regsiter={register('not_suitable')}/>
                    </Box>
                    <Box>
                        <p> Not Suitable Max </p>
                        <WhiteInput regsiter={register('end_not_suitable')}/>
                    </Box>
                    <br />


                  
                    <Box>
                        <p>Partially Suitable </p>
                        <WhiteInput regsiter={register('partially_suitable')}/>
                    </Box>
                    <Box>
                        <p>Partially Suitable Max</p>
                        <WhiteInput regsiter={register('end_partially_suitable')}/>
                    </Box>
                    <br />

                    <Box>
                        <p>Suitable </p>
                        <WhiteInput regsiter={register('suitable')}/>
                    </Box>
                    <Box>
                        <p>Suitable Max</p>
                        <WhiteInput regsiter={register('end_suitable')}/>
                    </Box>
    <br />
                <Button color={'lightBlueBtn'} css={{'width':'40%','paddingTop':'.5rem','paddingBottom':'.5rem','margin':'0 auto'}}>
                    Update
                </Button>
                <br />
                <br />
                <br />
                <br />

                </form>
               

            </Box>
            </Box>

        </LiveJobWithOtherContentLayout>
    )
}

export default ApplicationSorting