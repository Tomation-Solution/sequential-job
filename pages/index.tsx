import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Box from '../shared/Box/Box'
import Button from '../shared/Button/Button'
import DropdownMenuDemo from '../shared/DropdownMenuDemo/DropdownMenuDemo'
import JobCard from '../shared/JobCard/JobCard'
import SearchBar from '../shared/SearchBar/SearchBar'
import TabsComp from '../shared/Tabs/Tabs'

import api from '../service/axios'
import { useQuery  } from 'react-query'
import { get_jobs_api, JobType } from '../service/api/job.api'
import Preloader from '../shared/Preloader/Preloder'
import { useState } from 'react'
import JobDetail from '../shared/JobDetail/JobDetail'
import { useMediaQuery } from 'react-responsive'
import OffCanvas from '../shared/OffCanvas/OffCanvas'
import jwt_decode from "jwt-decode";
import { UserType } from '../service/api/authentication/authentication.api'
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import { getUser } from '../utils/extra_function'


const Home:NextPage = ()=>{ 
 const {status,error,data,isError} = useQuery('jobs',get_jobs_api)
  const [currentJob,setCurrentJob] = useState<null|JobType>(null)
  const [isOpen, setIsOpen] = useState(false)
  const logged_in_user = getUser()

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1250px)'
  })
  const handleJobDetail = (job:JobType)=>{
      // if(isDesktopOrLaptop){
      //   if it laptop just ffill the currentJob state
      //   setCurrentJob(job)
      // }else{
      //   if it is a small device we rediredt to a detail page
      // }

      setIsOpen(true)
      setCurrentJob(job)

    }


 return (
    <GeneralLayout>
      <Preloader loading={status=='loading'} />
     
     <Box css={{'display':'flex','justifyContent':'space-between',
    'maxWidth':'1600px',
    // 'border':'1px solid red',
    'margin':'0 auto'
    }}>
     <TabsComp
        data={[
{          'key':logged_in_user?.user_type ==='company'?'Live':'Jobs',
          'label':logged_in_user?.user_type ==='company'?'Live':'Jobs',
          'template':<Box css={{
              '@bp1':{
                'display':'flex',
                'flexWrap':'wrap'
              },
              '@bp3':{
                'display':'grid',
                'gridTemplateColumns':'repeat(3,360px)',
                'padding':'0 1rem',
                'gap':'10px'
              },
              '@bp5':{
                'gridTemplateColumns':'repeat(3,360px)',
              }
          }}>
          {
            data?
          data.map((job,index)=>(
              <Box onClick={()=>handleJobDetail(job)}>
                <JobCard job={job} key={index}/>
              </Box>
            )):''
            
          }
          </Box>
          
        },
          { 
            'key':logged_in_user?.user_type ==='company'?'Closed':'Saved Jobs',
          'label':logged_in_user?.user_type ==='company'?'Closed':'Saved Jobs',
          'template':
            <>
              Coming Soon
            </>
            
          },
        ]}
      />
     
     </Box>

     <OffCanvas
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      direction={isDesktopOrLaptop?'right':'bottom'}
     >
     {currentJob&&<JobDetail currentJob={currentJob}/>}

     </OffCanvas>
    </GeneralLayout>
  )
}

export default Home


// {
//   isDesktopOrLaptop?
// <Box>
// {currentJob&&<JobDetail currentJob={currentJob}/>}
// </Box>:''
// }