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
                <h1>You <strong>Application</strong> Has Been Saved</h1>

            <br />
            <p>
                {
                notice == 'yes'?
            'Thank you for your application, this job requires you to take the test below'
            :
            'Thank you for your interest in this job, we are currently processing your application' 
            }

            </p>
            <br />
            {
                notice=='yes'?
            <Button css={{'margin':'0 auto'}}>
                Take Test
            </Button>:''
            }
            </Box>
          </Box>
        
        </GeneralLayout>
    )
}

export default NoticePage