import { NextPage } from "next";
import Box from "../Box/Box";
import Button from "../Button/Button";
import { CVCallImageContainer, UploadCvCallToActionContainer, UploadCvCallToActionContainerContent } from "./UploadCvCallToAction.style";
import callingLadyImg from '../../asset/callingLady.png'




const UploadCvCallToAction:NextPage = ()=>{

    return (
        <UploadCvCallToActionContainer>
            <CVCallImageContainer>
                <img src={callingLadyImg.src} alt="" />
            </CVCallImageContainer>

            <UploadCvCallToActionContainerContent>
                <h2>Thousands of companies are searching CVs on Sequential Jobs</h2>

                <Box css={{'display':'inline-block','color':'#424242',}}>
                <p className="upload_cv_call_text">We'll help you get noticed</p>
                <br />
                <Box css={{'backgroundColor':' #24CDE2','padding':'2px','borderRadius':'10px','width':'60%'}}></Box>
                </Box>
                <br />
                <br />
                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <br />
                <p>By uploading your CV, you'll also:</p>

                <br />
                <br />
                <p>Receive recommended jobs in your inbox</p>
                <br />
                <Button shape={'usual_btn_shap'} css={{'fontSize':'.9rem'}}>Upload your CV</Button>
               <br />
                <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </UploadCvCallToActionContainerContent>
        </UploadCvCallToActionContainer>
    )
}

export default UploadCvCallToAction