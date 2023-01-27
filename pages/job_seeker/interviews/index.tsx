import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import LiveJobWithOtherContentLayout from "../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import { get_interviews } from "../../../service/api/jobSeekerInterview.api";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";
import Preloader from "../../../shared/Preloader/Preloder";







const ViewAllInterviews:NextPage = ()=>{
    const {isLoading,data} = useQuery('get_interviews_for_jobseekers',get_interviews)
    const route = useRouter()
    return (
        <LiveJobWithOtherContentLayout
        header='Interview Invite'>
            <Box css={{'padding':'1rem','maxWidth':'500px','margin':'0 auto'}}>

                {
                    data?.map((value,index)=>(
                        <Box key={index} css={{'color':'$white','borderTop':'1px solid $white','borderBottom':'1px solid $white','padding':'1rem 0'}}>
                        <p> You Have Been Invite For this job "<strong>{value.interview.job_title}</strong>"</p>
                         <Button onClick={(e)=>route.push(`/job_seeker/interviews/${value.id}/${value.interview.interview_id}/`)} color={'lightBlueOutline'}> Pick A date</Button>
                        </Box>
                    ))
                }
            </Box>
        </LiveJobWithOtherContentLayout>
    )
}

export default ViewAllInterviews