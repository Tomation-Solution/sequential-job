import { NextPage } from "next";
import LandIngWithHeroLayout from "../layout/LandIngWithHeroLayout/LandIngWithHeroLayout";
import HeroSectionV2 from "../shared/HeroSectionV2/HeroSectionV2";
import UploadCvCallToAction from "../shared/uploadCvCallToAction/UploadCvCallToAction";
import WhoWeAre from "../shared/WhoWeAre/WhoWeAre";




const UploadCv:NextPage =()=>{

    return (
   <LandIngWithHeroLayout use_hero={false}>
    <HeroSectionV2/>
    <UploadCvCallToAction/>
    <WhoWeAre/>
   </LandIngWithHeroLayout>
    )
}

export default UploadCv