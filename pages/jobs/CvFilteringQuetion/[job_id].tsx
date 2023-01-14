import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery ,useMutation} from "react-query";
import useToast from "../../../hooks/useToastify";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import { add_quetion_to_job, get_all_quetion } from "../../../service/api/job.api";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";
import Preloader from "../../../shared/Preloader/Preloder";
import SelectComponent from "../../../shared/Select/Select";




const AddQuetionTOJob:NextPage = ()=>{
    const {isLoading,data,isError} = useQuery('questions',get_all_quetion)
    const {isLoading:quetion_loading,mutate} = useMutation(add_quetion_to_job,{
        'onSuccess':(data)=>{
            notify('Quetion Added Succeffuly','success')
        },
        'onError':(err:any)=>{
            notify('Please Check your internet and refresh','error')
        }
    })
    const [quetion,setQuetion]= useState<string>('')
    const route = useRouter();
    const {notify} = useToast()
    const { job_id } = route.query
    const handleSubmit = ()=>{
        console.log({quetion,job_id})
        if(!quetion){
            notify('Please Select Quetion','error')
        }
        if(typeof job_id == 'string'){
            mutate({'id':parseInt(quetion),'job_id':parseInt(job_id)})
        }
    }
    return (
        <GeneralLayout>
            <Preloader loading={isLoading || quetion_loading} />
                            <br />
                           <Box css={{'width':'400px','margin':'0 auto'}}>
                           <SelectComponent 
                        showLabel={true}
                        label='Pick From the quetions below'
                        options={data?data.map((quetion,index)=>{
                                return{
                                    'name':quetion.title,
                                    'value':`${quetion.id}`
                                }
                            }):[]
                    }
                        setVaue={(name:string,value:string)=>{
                            setQuetion(value)
                        }}
                        name='quetion'
                        />
                        <br />
                        <Button onClick={(e)=>handleSubmit()}>Add Quetion To job</Button>
                           </Box>
        </GeneralLayout>
    )
}

export default AddQuetionTOJob