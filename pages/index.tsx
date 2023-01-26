import { NextPage } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import { JobType } from "../service/api/job.api";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import JobCard from "../shared/JobCard/JobCard";
import JobDetail from "../shared/JobDetail/JobDetail";
import OffCanvas from "../shared/OffCanvas/OffCanvas";
import WhiteInput from "../shared/WhiteInput/WhiteInput";

const dummyJobs:JobType[] =[
  {
    'id':1,
      "job_title": 'Hello Job',
      "is_active": true,
      "location": 'Lagos',
      "job_type": 'Remote',
      "salary": '100',
      "currency": 'Dollars',
      "job_required_document": 'Cert',
      "description": null,
      "job_filter": null,
      "description_content":'',
      interview:null,
      job_test:null,
      job_variant:'filter_only'
    },{
      'id':1,
        "job_title": 'Hello Job',
        "is_active": true,
        "location": 'Lagos',
        "job_type": 'Remote',
        "salary": '100',
        "currency": 'Dollars',
        "job_required_document": 'Cert',
        "description": null,
        "job_filter": null,
        "description_content":'',
        interview:null,
        job_test:null,
        job_variant:'filter_only'
      },{
        'id':1,
          "job_title": 'Hello Job',
          "is_active": true,
          "location": 'Lagos',
          "job_type": 'Remote',
          "salary": '100',
          "currency": 'Dollars',
          "job_required_document": 'Cert',
          "description": null,
          "job_filter": null,
          "description_content":'',
          interview:null,
          job_test:null,
          job_variant:'filter_only'
        },{
          'id':1,
            "job_title": 'Hello Job',
            "is_active": true,
            "location": 'Lagos',
            "job_type": 'Remote',
            "salary": '100',
            "currency": 'Dollars',
            "job_required_document": 'Cert',
            "description": null,
            "job_filter": null,
            "description_content":'',
            interview:null,
            job_test:null,
            job_variant:'filter_only'
          },{
            'id':1,
              "job_title": 'Hello Job',
              "is_active": true,
              "location": 'Lagos',
              "job_type": 'Remote',
              "salary": '100',
              "currency": 'Dollars',
              "job_required_document": 'Cert',
              "description": null,
              "job_filter": null,
              "description_content":'',
              interview:null,
              job_test:null,
              job_variant:'filter_only'
            },{
              'id':1,
                "job_title": 'Hello Job',
                "is_active": true,
                "location": 'Lagos',
                "job_type": 'Remote',
                "salary": '100',
                "currency": 'Dollars',
                "job_required_document": 'Cert',
                "description": null,
                "job_filter": null,
                "description_content":'',
                interview:null,
                job_test:null,
                job_variant:'filter_only'
              },{
                'id':1,
                  "job_title": 'Hello Job',
                  "is_active": true,
                  "location": 'Lagos',
                  "job_type": 'Remote',
                  "salary": '100',
                  "currency": 'Dollars',
                  "job_required_document": 'Cert',
                  "description": null,
                  "job_filter": null,
                  "description_content":'',
                  interview:null,
                  job_test:null,
                  job_variant:'filter_only'
                },{
                  'id':1,
                    "job_title": 'Hello Job',
                    "is_active": true,
                    "location": 'Lagos',
                    "job_type": 'Remote',
                    "salary": '100',
                    "currency": 'Dollars',
                    "job_required_document": 'Cert',
                    "description": null,
                    "job_filter": null,
                    "description_content":'',
                    interview:null,
                    job_test:null,
                    job_variant:'filter_only'
                  }
                  ,{
                    'id':1,
                      "job_title": 'Hello Job',
                      "is_active": true,
                      "location": 'Lagos',
                      "job_type": 'Remote',
                      "salary": '100',
                      "currency": 'Dollars',
                      "job_required_document": 'Cert',
                      "description": null,
                      "job_filter": null,
                      "description_content":'',
                      interview:null,
                      job_test:null,
                      job_variant:'filter_only'
                    },{
                      'id':1,
                        "job_title": 'Hello Job',
                        "is_active": true,
                        "location": 'Lagos',
                        "job_type": 'Remote',
                        "salary": '100',
                        "currency": 'Dollars',
                        "job_required_document": 'Cert',
                        "description": null,
                        "job_filter": null,
                        "description_content":'',
                        interview:null,
                        job_test:null,
                        job_variant:'filter_only'
                      },{
                        'id':1,
                          "job_title": 'Hello Job',
                          "is_active": true,
                          "location": 'Lagos',
                          "job_type": 'Remote',
                          "salary": '100',
                          "currency": 'Dollars',
                          "job_required_document": 'Cert',
                          "description": null,
                          "job_filter": null,
                          "description_content":'',
                          interview:null,
                          job_test:null,
                          job_variant:'filter_only'
                        }
] 
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
<br />

<Box css={{

  'padding':'0 1rem',
  'maxWidth':'650px',
  'margin':'0 auto',
  '&> div':{
    'margin':'1rem 0'
  },
'@bp2':{
    'display':'flex','justifyContent':'space-between',
    '&> div':{
      'margin':'unset'
    },
  }
}}>
<Box css={{'position':'relative','backgroundColor':'#D9D9D9','overflow':'hidden','borderRadius':'5px'}}>
  <label htmlFor="" style={{'color':'#24CDE2',
  // 'border':'1px solid red',
  'display':'inline-block',
  'padding':'.4rem .4rem','position':'absolute','transform':'translateY(1px)'
}} >What</label>
<WhiteInput 
placeHolder="Job title, keywords, or company"
intputCss={{'borderRadius':'0px','width':'100%',
'&::placeholder':{
  'fontSize':'.7rem !important',
  'color':'#0404045c'
}
}} css={{
  // 'backgroundColor':'red',
  'paddingLeft':'3.3rem'}}/>
</Box>

<Box css={{'position':'relative','backgroundColor':'#D9D9D9','overflow':'hidden','borderRadius':'5px'}}>
  <label htmlFor="" style={{'color':'#24CDE2',
  // 'border':'1px solid red',
  'display':'inline-block',
  'padding':'.4rem .4rem','position':'absolute','transform':'translateY(1px)'
}} >Where </label>
<WhiteInput 
placeHolder="City, remote, hybrid, or on-site"
intputCss={{'borderRadius':'0px','width':'100%',
'&::placeholder':{
  'fontSize':'.7rem !important',
  'color':'#0404045c'
}
}} css={{
  // 'backgroundColor':'red',
  'paddingLeft':'3.3rem',
 
  }}/>
</Box>
</Box>
<br />
<br />
<Button css={{'margin':' 0 auto','borderRadius':'5px'}} >
Search
</Button>

<br />
<h1 style={{'textAlign':'center'}}>Result for position of Business Developer , Remote  </h1>
<br />
<Box css={{
              '@bp1':{
                'margin':'0 auto',
                'display':'flex',
                'flexWrap':'wrap',
              },
              '@bp3':{
                'display':'grid',
                'gridTemplateColumns':'repeat(3,1fr)',
                'padding':'0 1rem',
                'gap':'10px'
              },
              '@bp5':{
                'gridTemplateColumns':'repeat(4,1fr)',
              }
          }}>
            {
              dummyJobs.map((data,index)=>(
                <Box onClick={()=>handleJobDetail(data)}>
                <JobCard job={data} key={index}/>
              </Box>
              ))
            }

</Box>


<OffCanvas
      setIsOpen={setCavasOpenClose}
      isOpen={cavasOpen}
      direction={isDesktopOrLaptop?'right':'bottom'}
     >
     {currentJob&&<JobDetail currentJob={currentJob}/>}

     </OffCanvas>
    </LandingPageLayout>
  )
}

export default LandingPageIndex