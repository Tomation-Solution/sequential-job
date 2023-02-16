import Box from "../Box/Box"
import { InfoPaneWithPicsContainer } from "./InfoPaneWithPics.style"
import Image from '../../asset/div_after.png'
import {BsFillCloudUploadFill} from 'react-icons/bs'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Button from "../Button/Button"
import ArrowBigRight from '../../asset/arrowBigRight.png'
const InfoPaneWithPics =():React.ReactElement=>{

    return (
        <InfoPaneWithPicsContainer>

            <BsFillCloudUploadFill/>
            <Box>
                <h3>Find Job / Upload Resume</h3>
                <p>
                Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <br/>

                <Button css={{'height':'50px','width':'50px','borderRadius':'50%','display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <img src={ArrowBigRight.src} style={{'display':'block'}}/>
               </Button>
               <br />
            </Box>
            <img src={Image.src} alt="" />
            

        </InfoPaneWithPicsContainer>
    )
}

export default InfoPaneWithPics