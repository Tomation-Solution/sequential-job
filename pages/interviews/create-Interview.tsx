import { NextPage } from "next";
import LiveJobWithOtherContentLayout from "../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import Box from "../../shared/Box/Box";
import Button from "../../shared/Button/Button";
import IntroInterview from "../../shared/InterVIews/Intro/IntroInterview";
import SelectInterviewSchedule from "../../shared/InterVIews/SelectInterviewSchedule/SelectInterviewSchedule";




const CreateInterview:NextPage =()=>{


    return (
        <LiveJobWithOtherContentLayout
            header=""
        >
   <Box css={{
                'color':'$white','fontSize':'.8rem','maxWidth':'600px','margin':'0 auto',
                '@bp2':{
                    'fontSize':'1.1rem',
                    'p':{
                        'fontSize':'1rem'
                    }
                }
                }}>
          
    

            <Box >
                <form action="">
                    {/* <IntroInterview/> */}
                    <SelectInterviewSchedule/>
                <br />
                <br />
                    <Button css={{'width':'30%','margin':'0 auto'}} >
                        Next
                    </Button>
                </form>
            </Box>
            </Box>

        </LiveJobWithOtherContentLayout>
    )
}

export default CreateInterview