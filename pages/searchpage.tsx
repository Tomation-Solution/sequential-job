import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import {GoSettings} from 'react-icons/go'
import JobCard from "../shared/JobCard/JobCard";
import JobCardV2 from "../shared/JobCardV2/JobCardV2";
import bluearrow from '../asset/bluearrow.png'


const Searchpage:NextPage =()=>{
    return (
        <LandingPageLayout>
            <Box css={{'color':'#212121','span':{'color':'#0F565F'},'backgroundColor':'white','padding':'2rem .8rem'}}>
                <h2 style={{'maxWidth':'1280px','margin':'0 auto'}}>Search results for <span>Designer Jobs</span></h2>
            </Box>
            <Box  css={{'backgroundColor':'#f2f2f2',}}>
                

                <Box css={{'maxWidth':'1200px','margin':'0 auto'}}>
                    <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'10px auto','padding':'1rem'}}>
                        <p style={{'color':'#212121'}}>All results</p>
                        <Button css={{'borderRadius':'5px','padding':'.9rem .6rem',}}><GoSettings style={{'marginRight':'5px'}}/>Filter</Button>
                    </Box>

                    <Box css={{'display':'flex','justifyContent':'space-between'}}>
                    <Box>
                    <JobCardV2 title="Mid-Senior Designer - Publishing"/>
                    <br />
                    <JobCardV2 title="Senior Designer"/>
                    <br />
                    <JobCardV2 title="Trainee Designer"/>
                    <br />
                    <JobCardV2 title="Infographics Designer"/>
                    </Box>
                        <Box css={{'padding':'2rem .8rem' ,'boxShadow':'0px 4px 9px rgba(33, 33, 33, 0.1)','width':'60%','backgroundColor':'white',
                        'textAlign':'center','h1,p':{'color':'#212121'}}}>
                            <Box css={{'maxWidth':'600px','margin':'0 auto','padding':'1rem 2rem'}}>
                                <h1>Get noticed by top employers!</h1><br />
                                <p>Do you want to speed up your job search? Post your CV on Sequential Jobs and let employers know you are open to opportunities. Plus, receive relevant job recommendations in your inbox.</p>
                                <Button css={{'borderRadius':'5px','padding':'.8rem 1rem','fontSize':'.9rem','margin':'10px auto'}} >Send Us Your CV</Button>
                                <br />
                                <p style={{'color':'#24CDE2'}}>Send Us Your CV
                                <img src={bluearrow.src}  style={{marginLeft:'10px'}} alt="" />
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </LandingPageLayout>
    )
}
export default Searchpage