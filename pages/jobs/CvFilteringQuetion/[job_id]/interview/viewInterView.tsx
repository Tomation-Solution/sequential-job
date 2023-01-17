import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useToast from "../../../../../hooks/useToastify";
import LiveJobWithOtherContentLayout from "../../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { view_interviewApi } from "../../../../../service/api/interview.api";
import Box from "../../../../../shared/Box/Box";
import InterviewDateSelect from "../../../../../shared/InterVIews/InterviewDateSelect/InterviewDateSelect";
import Preloader from "../../../../../shared/Preloader/Preloder";





const ViewInterView:NextPage = ()=>{
    const route= useRouter();
    const {notify} = useToast()
    const { job_id } = route.query
    const [enable_getting_info,setEnableGettingInfo] = useState(false)// this will only enable when the url params are availabe
    const  {isLoading , data,status} = useQuery(['interviewView',job_id],()=>view_interviewApi(typeof job_id==='string'?parseInt(job_id):-1),{
        'enabled':enable_getting_info
    })

    useEffect(()=>{
        if(typeof job_id == 'string'){
            //we can now use id to get the data
            setEnableGettingInfo(true)
        }
    },[route.isReady])

    useEffect(()=>{
        if(status ==='error'){
            notify('Interview Not Set yet','error')
            route.push('/interviews/create-Interview/')
        }
    },[status])
    console.log({data})

    return (
        <LiveJobWithOtherContentLayout
        header='View Interview'>
            <Preloader loading={isLoading} />
<br />
        <br />
        <label htmlFor="">View Available date  for candidates to pick from:</label>
        <br />
        <br />
        <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
            {
                data?
               JSON.parse(data.list_of_available_dates as any).map((data:any,index:number)=>(
                        <InterviewDateSelect>
                            {data.available_dates}
                        </InterviewDateSelect>
                    )):''
                }
        </Box>

        <br />
          <p>Time Selected</p>
          <br />
          <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
          {
             data?
             JSON.parse(data.list_of_available_time as any).map((data:any,index:number)=>(
                        <InterviewDateSelect>
                            {data.available_time}
                        </InterviewDateSelect>
                    )):''
                }
            </Box>

            <br />
          <p>Set Name and Cut Off for:</p>
          <br />
          <Box css={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'10px 6px'}}>
          {
            data?
                data.rating_sheet.map((data,index)=>(
                    <Box>
                        <p><strong>Name: </strong>{data.name}</p>
                        <p><strong>CutOff: </strong>{data.cut_off}</p>
                    </Box>
                    )):''
                }
            </Box>

            <br />
        <br />
        <label htmlFor=""><strong>View Pannelist Email:</strong></label>
        <br />
        <br />
        <Box css={{'display':'grid','gridTemplateColumns':'1fr 1fr','gap':'10px 6px'}}>
            {
                data?
               data.list_of_email.map((data,index)=>(
                            <p>{data.email}</p>
                    )):''
                }
        </Box>
        </LiveJobWithOtherContentLayout>
    )
}

export default ViewInterView