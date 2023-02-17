import { NextPage } from "next";
import HeroSection from "../../shared/HeroSection/HeroSection";
import VisionAndMission from "../../shared/VisionAndMission/VisionAndMission";
import LandingPageLayout from "../LandingPageLayout/LandingPageLayout";




type Prop =  React.PropsWithChildren<{
    use_hero?:boolean
}>
const LandIngWithHeroLayout =({children,use_hero=true}:Prop):React.ReactElement=>{

    return(
        <LandingPageLayout>
            {
                use_hero?
                <HeroSection/>:''
            }
            {children}
            <VisionAndMission/>
        </LandingPageLayout>
    )
}

export default LandIngWithHeroLayout