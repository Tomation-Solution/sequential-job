import Box from "../../shared/Box/Box"
import LandingPageNav from "../../shared/LandingPageNav/LandingPageNav"
import { LandingPageLayoutContainer } from "./LandingPageLayout.style"




type Prop = React.PropsWithChildren<{

}>

const LandingPageLayout = ({children}:Prop):React.ReactElement=>{



    return (

        <LandingPageLayoutContainer>

            <LandingPageNav />
            <br />
            {children}
        </LandingPageLayoutContainer>
    )
}

export default LandingPageLayout