import { NextPage } from "next";
import { useRouter } from "next/router";
import GeneralLayout from "../../../../layout/GeneralLayout/GeneralLayout";
import Box from "../../../../shared/Box/Box";
import Button from "../../../../shared/Button/Button";




const NoticePage:NextPage =()=>{
    const route = useRouter()
    const {notice} = route.query

    return (
        <GeneralLayout>
          <Box css={{'display':'flex','flexDirection':'column','justifyContent':'center','alignItems':'center','height':'80vh'}}>
          <Box css={{'maxWidth':'500px','margin':'0 auto','textAlign':'center'}}>
                <h1>Your <strong>Submission</strong> Has Been Saved</h1>

            <br />
            <p>
                {
                notice != 'no'?
            'Thank you for your taking this test, this job requires you to take the pre-qualification test below'
            :
            'Thank you for your interest in this job, we are currently processing your application' 
            }

            </p>
            <br />
            {
                notice!='no'?
            <Button css={{'margin':'0 auto'}} onClick={(e)=>route.push(`/job_seeker/test_quetion/${notice}/`)}>
                Take pre-qualification 
            </Button>:''
            }
            </Box>
          </Box>
        
        </GeneralLayout>
    )
}

export default NoticePage