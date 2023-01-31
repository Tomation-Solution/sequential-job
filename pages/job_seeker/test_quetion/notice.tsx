import { NextPage } from "next";
import { useRouter } from "next/router";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";





const NoticePage:NextPage =()=>{
    const route = useRouter()
    const {notice} = route.query

    return (
        <GeneralLayout>
          <Box css={{'display':'flex','flexDirection':'column','justifyContent':'center','alignItems':'center','height':'80vh'}}>
          <Box css={{'maxWidth':'500px','margin':'0 auto','textAlign':'center'}}>
                <h1>You <strong>Application</strong> Has Been Saved</h1>

            <br />
            <p>
            Thank you for your interest in this job, we are currently processing your application
              

            </p>
            <br />
            <Button css={{'margin':'0 auto'}} onClick={(e)=>route.push(`/dashboard_index/`)}>
                Apply For More Jobs
            </Button>
            </Box>
          </Box>
        
        </GeneralLayout>
    )
}

export default NoticePage