import { NextPage } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import { JobType } from "../service/api/job.api";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import InfoPaneWithPics from "../shared/InfoPaneWithPics/InfoPaneWithPics";
import JobCard from "../shared/JobCard/JobCard";
import JobDetail from "../shared/JobDetail/JobDetail";
import LandingPageSearchBar from "../shared/LandingPageSearchBar/LandingPageSearchBar";
import OffCanvas from "../shared/OffCanvas/OffCanvas";
import SearchBar from "../shared/SearchBar/SearchBar";
import SelectComponent from "../shared/Select/Select";
import SelectBarV2 from "../shared/SelectBarV2/SelectBarV2";
import WhiteInput from "../shared/WhiteInput/WhiteInput";
import {BsSearch} from 'react-icons/bs'
import VisionAndMission from "../shared/VisionAndMission/VisionAndMission";
import african_womanjobImg from '../asset/african_womanjob.png'
import metricImg from '../asset/metric.jpg'
import ArrowBtn from "../shared/ArrowBtn";
const LineCss ={'height':'60px','width':'1px','backgroundColor':'#e6e7e8d1'}

const dummyJobs:JobType[] =[]
const LandingPageIndex:NextPage = ()=>{
  const [currentJob,setCurrentJob] = useState<null|JobType>(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleJobDetail = (job:JobType)=>{
    setCavasOpenClose(true)
    setCurrentJob(job)
    console.log("Twoj")
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1250px)'
  })
  const [cavasOpen, setCavasOpenClose] = useState(false)

  return (
    <LandingPageLayout>
      <Box css={{'backgroundColor':'$thickBlue','padding':'1rem',}}>
      <Box css={{'maxWidth':'1000px','margin':'0 auto'}}>
        <LandingPageSearchBar/>
      </Box>
      </Box>
<br />
<br />
<br />
<br />
      <Box css={{
        'display':'flex',
        'flexDirection':'column',
        'padding':'1rem',
        'maxWidth':'1300px',
        'margin':'0 auto',
        '&>div:nth-child(1)':{
            'marginLeft':'auto',
            'marginBottom':'40px',
        },
        '@bp3':{
          '&>div:nth-child(1)':{
            'margin':'unset'
          },
        'display':'flex','justifyContent':'space-between', 'flexDirection':'row',

      }}}>
      <InfoPaneWithPics name="Upload a CV " 
      to="/upload-cv"
      content="Our top priority at Sequential Jobs is to make sure the best candidate gets the best job, upload and register your CV with us today to enjoy this great benefit at no extra cost."/>
      <InfoPaneWithPics 
      to={'/signup'}
      name="Post a Job " img={african_womanjobImg.src} content="Sequential Jobs is here to help you find the best candidate that matches your job requirements. Post your job on our portal to get the right fit."/>
      </Box>
      <br />
<br />
<Box css={{'backgroundColor':'$thickBlue'}}>

<Box css={{'padding':'2rem 1rem',
'display':'flex','justifyContent':'center','alignItems':'center','flexDirection':'column','gap':'10px','maxWidth':'1300px','margin':'0 auto',
'.line':{'display':'none'},
'@bp2':{
  '.line':{'display':'block'},
  '&':{
    'flexDirection':'row','flexWrap':'wrap','gap':'0 60px'
  }
}}}>
  <SelectBarV2 label="Popular Job Categories"/>
  <Box className="line" css={LineCss}></Box>
  <SelectBarV2 label="Popular Job Titles"/>
  <Box className="line" css={LineCss}></Box>
  <SelectBarV2 label="Popular Job Locations"/>
  <Box className="line" css={LineCss}></Box>
  <SelectBarV2 label="Popular Job Searches"/>
  <Button
    css={{'borderRadius':'5px',
    'width':'45px',
    'height':'45px',
    'display':'flex','alignItems':'center',}}
  >
                    <BsSearch/>
     </Button>

</Box>

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
<br />
<VisionAndMission/>
<br />
<br />
<Box
css={{
  
  'img':{
    'width':'80%',
    'display':'block',
    'margin':'0 auto'
  },
  '@bp2':{
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'space-between',
    'maxWidth':'1000px',
    // 'border':'1px solid red',
    'margin':'0 auto',
    '& > div':{
      'textAlign':'left',
      'padding':'0  1.4rem ',
      'width':'45%',
    },
    'img':{
      'width':'40%',
    }
  }
}}
>
  <img src={metricImg.src} alt="" />
  <Box
  css={{
    'textAlign':'center',
    'color':'#212121',
  'h2':{
    fontFamily:'Ubuntu',
    padding:'.4rem 0'
  },
  '@bp2':{
    'h2':{
      'fontSize':'2.3rem',
      'fontWeight':'200'
    }
  }
  }}
  >
    <h2>E-metrics Suite</h2>
    <p>Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
<br />
<ArrowBtn
to="https://www.emetricsuite.com/"
/>

  </Box>
</Box>
<br />
<br />
    </LandingPageLayout>
  )
}

export default LandingPageIndex