import Box from "../../shared/Box/Box"
import LandingPageNav from "../../shared/LandingPageNav/LandingPageNav"
import { LandingPageLayoutContainer } from "./LandingPageLayout.style"
import { useTheme } from "next-themes";
import { useEffect } from "react";




type Prop = React.PropsWithChildren<{

}>

const LandingPageLayout = ({children}:Prop):React.ReactElement=>{

    const { theme, setTheme } = useTheme();

    useEffect(()=>{
        
        setTheme('landing_page')
    },[])

    return (

        <LandingPageLayoutContainer>

            <LandingPageNav />
            <br />
            {children}
        </LandingPageLayoutContainer>
    )
}

export default LandingPageLayout