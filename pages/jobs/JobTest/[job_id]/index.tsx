import { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery ,useMutation} from "react-query";
import useToast from "../../../../hooks/useToastify";
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout";
import { add_quetion_to_job, add_test_to_job, get_all_quetion, get_all_test } from "../../../../service/api/job.api";
import Box from "../../../../shared/Box/Box";
import Button from "../../../../shared/Button/Button";
import Preloader from "../../../../shared/Preloader/Preloder";
import SelectComponent from "../../../../shared/Select/Select";




const AddTestTOJob:NextPage = ()=>{
    const {isLoading,data,isError} = useQuery('tests',get_all_test)
    const {isLoading:quetion_loading,mutate} = useMutation(add_test_to_job,{
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
            <h2 style={{'textAlign':'center'}}>Please Pick Test For this Job</h2>
                            <br />
                           <Box css={{'width':'400px','margin':'0 auto'}}>
                           <SelectComponent 
                        showLabel={true}
                        label='Pick From the Test below'
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

export default AddTestTOJob