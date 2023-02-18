import { NextPage } from "next"
import Button from "../Button/Button"
import { HeroSectionContainer, HeroSectionContent } from "./HeroSection.style"
import loginImage from '../../asset/andrea.png'
import { useMediaQuery } from 'react-responsive'
import Box from "../Box/Box"


const transparentImgStyle = {'backgroundImage':`linear-gradient(to bottom, #000022,rgba(0, 0, 34, 0.63)),url(${loginImage.src})`}
const  HeroSection = ():React.ReactElement=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 700px)'
      })
    return (
        <Box css={{  'backgroundColor':'$thickBlue',}}>
            <HeroSectionContainer 
        css={isDesktopOrLaptop?{}:transparentImgStyle}
        >
            <HeroSectionContent >
                <h2>Recruitment Made Easy</h2>
                <p>Post your first job adverttoday</p>
                <Button shape={'usual_btn_shap'}>Search CV</Button>
                <p>Need assistance? Call us on: 008000000000</p>
            </HeroSectionContent>

            <img src={loginImage.src} />
        </HeroSectionContainer>
        </Box>
    )
}

export default HeroSection