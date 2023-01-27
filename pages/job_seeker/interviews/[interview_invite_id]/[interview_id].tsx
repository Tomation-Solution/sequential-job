import { NextPage } from "next";
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout";
import { useMutation, useQuery } from "react-query";
import LiveJobWithOtherContentLayout from "../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { get_interviewDetail, get_interviews, pick_interview_date } from "../../../../service/api/jobSeekerInterview.api";
import Box from "../../../../shared/Box/Box";
import Preloader from "../../../../shared/Preloader/Preloder";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import InterviewDateSelect from "../../../../shared/InterVIews/InterviewDateSelect/InterviewDateSelect";
import useToast from "../../../../hooks/useToastify";
import Button from "../../../../shared/Button/Button";









const InterviewDetail:NextPage = ()=>{
    const route = useRouter();
    const {notify} =useToast()
    const {interview_id, interview_invite_id} =route.query
    const { mutate ,isLoading, data} = useMutation(get_interviewDetail,{
        'onSuccess':(data)=>{
            console.log({data})
        }
    })

    const {mutate:pick_date,isLoading:submitting} = useMutation(pick_interview_date,{
        onSuccess:()=>{
            notify('Successfuly Scheduled','success')

            if(typeof interview_invite_id == 'string'){
                // we  it success fetch the data again
                mutate(parseInt(interview_invite_id))
            }
        },
        onError:(err:any)=>{
            console.log({err})
            const error= err.response.data.error.error
            notify(error,'error')
        },
      
    })
    const [selectedDate,setSelectedDate] = useState('');
    const [selectedTime,setSelectedTime] = useState('');

    const handleSubmit = ()=>{
        if(selectedDate.length==0 || selectedTime.length == 0){
            notify('Please Complete the Pick','error')
            return 
        }
        if(typeof interview_id === 'string'){
            pick_date({
                'available_dates':selectedDate,
                'available_time':selectedTime,
                'interview_id':parseInt(interview_id)
            })
        }
    }
    useEffect(()=>{
        if(typeof interview_invite_id == 'string'){
            mutate(parseInt(interview_invite_id))
        }
    },[route.isReady])
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
                data?.interview.dates_related_data.dates.map((date,index)=>(

                        <Box key={index}
                            onClick={(e)=>{
                                if(selectedDate===date.available_dates || date.is_selected===true){
                                    notify('Not Available','error')
                                    return 
                                }
                                notify('Picked!','success')
                                setSelectedDate(date.available_dates)

                            }}
                        >
                            <InterviewDateSelect 
                            is_selected={date?.is_selected?true:false}
                            choosed={selectedDate===date.available_dates}
                            > 
                            {date.available_dates}
                        </InterviewDateSelect>
                        </Box> 
                ))
            }
        </Box>

        <br />
          <p>Time Selected</p>
          <br />
          <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>

            {
                 data?.interview.dates_related_data.times.map((time,index)=>(
                   <Box
                   key={index}
                   onClick={(e)=>{
                    if(selectedTime===time.available_time || time.is_selected===true){
                        notify('Not Available','error')
                        return 
                    }
                    notify('Picked!','success')
                    setSelectedTime(time.available_time)
                }}
                   >
                        <InterviewDateSelect
                         is_selected={time?.is_selected?true:false}
                         choosed={selectedTime===time.available_time}
                         
                         >
                        {time.available_time}
                        </InterviewDateSelect>
                   </Box>
                 ))
            }
            </Box>
            <br />
            <br />
            <Button onClick={handleSubmit} css={{'margin':'0 auto'}}>Submit</Button>
            <br />
            <br />            <br />
            <br />            <br />
            <br />            <br />
            <br />
        </LiveJobWithOtherContentLayout>
      
    )
}

export default InterviewDetail