import { NextPage } from "next";
import HeroSection from "../../shared/HeroSection/HeroSection";
import VisionAndMission from "../../shared/VisionAndMission/VisionAndMission";
import LandingPageLayout from "../LandingPageLayout/LandingPageLayout";




type Prop =  React.PropsWithChildren<{}>
const LandIngWithHeroLayout =({children}:Prop):React.ReactElement=>{

    return(
        <LandingPageLayout>
            <HeroSection/>
            {children}
            <VisionAndMission/>
        </LandingPageLayout>
    )
}

export default LandIngWithHeroLayout