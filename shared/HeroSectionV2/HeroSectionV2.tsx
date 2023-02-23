import { HeroSectionV2Container } from "./HeroSectionV2.style"
import latopImg from '../../asset/latop.jpg'
import Button from "../Button/Button"
import { getUser } from "../../utils/extra_function"
import useToast from "../../hooks/useToastify"
import { useRouter } from "next/router"

const transparentImgStyle = {'backgroundImage':`linear-gradient(to right, #000022,rgba(0, 0, 34, 0.219)),url(${latopImg.src})`}


const HeroSectionV2 =():React.ReactElement=>{
    const user = getUser()
    const {notify} = useToast()
    const route = useRouter()
    const handleCvAuth = ()=>{
        const user = getUser()

                    if(!user){
                        notify('Your need to create an account for this','error')
                        route.push('/job_seeker_signup')
                    }else{
                        route.push('/profile')
                    }
    }
    return(
       <HeroSectionV2Container
       css={transparentImgStyle}
       >
           <div>
           <h2>Upload your CV on Sequential Jobs</h2>
            <p>and let the right job find you</p>
            <Button
            onClick={(e)=>{
                handleCvAuth()
            }}
            shape={'usual_btn_shap'}  css={{'fontSize':'.9rem','margin':'10px auto'}}>Upload your CV</Button>
           </div>
       </HeroSectionV2Container> 
    )
}

export default HeroSectionV2