import Box from "../Box/Box"
import { InfoPaneWithPicsContainer } from "./InfoPaneWithPics.style"
import Image from '../../asset/div_after.png'
import {BsFillCloudUploadFill} from 'react-icons/bs'
import {FaLongArrowAltRight} from 'react-icons/fa'
import Button from "../Button/Button"
import ArrowBigRight from '../../asset/arrowBigRight.png'
import ArrowBtn from "../ArrowBtn"


type Prop ={
    name:string;
    content:string;
    img?:string,
    to?:string
}
const InfoPaneWithPics =({to='#',name,content,img=Image.src}:Prop):React.ReactElement=>{

    return (
        <InfoPaneWithPicsContainer>

            <BsFillCloudUploadFill/>
            <Box>
                <h3>{name}</h3>
                <p>
                    {content} </p>
                <br/>

                {/* <Button css={{'height':'50px','width':'50px','borderRadius':'50%','display':'flex','justifyContent':'center','alignItems':'center'}}>
                    <img src={ArrowBigRight.src} style={{'display':'block'}}/>
               </Button> */}
        <ArrowBtn to={to}/>
               <br />
            </Box>
            <img src={img} alt="" />
            

        </InfoPaneWithPicsContainer>
        
    )
}

export default InfoPaneWithPics