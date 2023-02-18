import LandIngWithHeroLayout from "../layout/LandIngWithHeroLayout/LandIngWithHeroLayout"
import UploadCvCallToAction from "../shared/uploadCvCallToAction/UploadCvCallToAction"
import WhoWeAre from "../shared/WhoWeAre/WhoWeAre"





const SearchCv=():React.ReactElement=>{
    return (
        <LandIngWithHeroLayout>
    <UploadCvCallToAction/>
    <WhoWeAre/>
        </LandIngWithHeroLayout>
    )
}

export default SearchCv