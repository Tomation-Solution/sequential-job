import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import Box from "../shared/Box/Box";
import HeaderInfoSection from "../shared/HeaderInfoSection/HeaderInfoSection";
import Image from '../asset/employerpage.png'
import RecruitmentProcess from "../shared/RecruitmentProcess/RecruitmentProcess";
import tvGraph from '../asset/tvGraph.svg'



const EmployerPage:NextPage = ()=>{

    const data = [
        {
            heading:'Post Job',
        },
        {
            heading:'Set Test',
        },
        {
            heading:'Interview',
        },
        {
            heading:'Scoring',
        },
        {
            heading:'Sorting',
        },
    ]
    return (
        <LandingPageLayout>
            <HeaderInfoSection
            heading="Recruitment Process Made Easy"
            content={`
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.         
            `}
            isBtn={false}
            imageSrc={Image.src}
            />

<br />
<br />
            <h2 style={{'textAlign':'center'}}>Recruitment Process</h2>
            <br />
<br />
           <Box css={{'padding':'0 1rem','display':'flex','flexWrap':'wrap','maxWidth':'1200px','margin':'0 auto','gap':'20px'}}>
            {
                data.map(({heading},index)=>(
                    <RecruitmentProcess
                        heading={heading}
                        count={index+1}
                    />

                ))
            }
           </Box>
        </LandingPageLayout>
    )
}


export default EmployerPage