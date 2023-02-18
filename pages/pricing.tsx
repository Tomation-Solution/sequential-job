import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import LandIngWithHeroLayout from "../layout/LandIngWithHeroLayout/LandIngWithHeroLayout";
import Box from "../shared/Box/Box";
import HeroSection from "../shared/HeroSection/HeroSection";
import PricingDetail, { pringingProp } from "../shared/PricingDetail/PricingDetail";
import VisionAndMission from "../shared/VisionAndMission/VisionAndMission";
import { pringingData } from "../utils/pricingData";







const Pricing:NextPage=()=>{
    return (
        <LandIngWithHeroLayout>
    

            <h2 style={{color:'black','textAlign':'center','padding':'2rem 0'}} >Ready to Hire Today?</h2>


            <Box css={{'padding':'1rem',
            '&>div':{'margin':'10px 0'},
            '@bp2':{
                'display':'flex','justifyContent':'space-between','alignItems':'center','flexWrap':'wrap','gap':'20px'
            },
            '@bp700':{
                display:'grid',
                'gridTemplateColumns':'repeat(3,1fr)','maxWidth':'1200px','margin':'0 auto'
            }
            
            }}>
                {
                    pringingData.map((data,index)=>(
                        <PricingDetail {...data} key={index}/>
                    ))
                }
            </Box>
            <br />
            <br />
            <br />
            <Box css={{'color':'#000000',
            'padding':'.4rem','textAlign':'center','maxWidth':'700px','margin':'0 auto',
            'h2':{
            'fontWeight':'700','fontSize':'2rem',},'p':{'fontSize':'.8rem'},
            '@bp2':{
                'h2':{
                'fontWeight':'600',
                'fontSize':'2.5rem'
                },'p':{'fontSize':'.9rem'},
            }
            }}>
            <h2>Who We Are</h2>
            <br/>
            <p>Sequential jobs is a job portal established in 2022 to simplify the job sourcing and placement processes for both the job seekers and employers respectively. It is developed to ensure that an average suitable applicant secures the dream job while ensuring that stress free operations are established in a stress free environment.</p>
            </Box>
            <br />
        </LandIngWithHeroLayout>
    )
}
export default Pricing