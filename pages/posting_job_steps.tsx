import { NextPage } from "next";
import LandIngWithHeroLayout from "../layout/LandIngWithHeroLayout/LandIngWithHeroLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import JobSteps from "../shared/JobSteps/JobSteps";
import WhoWeAre from "../shared/WhoWeAre/WhoWeAre";




const PostingJobSteps:NextPage = ()=>{

    return (
        <LandIngWithHeroLayout >
            <Box css={{'maxWidth':'1000px','margin':'0 auto','color':'$thickBlue'}}>
              <br />
              <br />
                <h2>Posting with Sequential Jobs</h2>
                
                {
                    [...new Array(10)].map((data:any,index:number)=>(
                        <JobSteps flex={index%2!=0?'reverse':'no-reverse'} key={index}/>
                        ))
                }
<br />
<br />
<Button  shape='usual_btn_shap' css={{'fontSize':'.9rem','margin':'0 auto'}} >Post Job</Button>
            </Box>
   <WhoWeAre/>
        </LandIngWithHeroLayout>
    )
}

export default PostingJobSteps