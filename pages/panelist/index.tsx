


import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import { get_jobs_related_to_panelist } from '../../service/api/panelist.api'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import JobCard from '../../shared/JobCard/JobCard'
import Preloader from '../../shared/Preloader/Preloder'

export const PanelistIndexPage:NextPage = () => {

  const {isLoading,data} = useQuery('panlist_jobs',get_jobs_related_to_panelist)
  const route = useRouter()
  return (
    <GeneralLayout>
      <Preloader loading={isLoading}/>
      {
        data?
      <Box
      css={{
              '@bp1':{
                'display':'flex',
                'flexWrap':'wrap'
              },
              '@bp3':{
                'display':'grid',
                'gridTemplateColumns':'repeat(2,360px)',
                'padding':'0 1rem',
                'gap':'10px',
              },
          }}
      >
        {
          data.map((job,index)=>(
            <Box key={index}
              onClick={()=>{
                route.push(`/jobs/CvFilteringQuetion/${job.id}/view-filter-candidate/`)
              }}
            >
              <JobCard job={job}/>
            </Box>
          ))
        }
        
      </Box>:''
      }
    </GeneralLayout>
  )
}


export default PanelistIndexPage




const PanelistAgree = ():React.ReactElement=>{

  return (
    <Box css={{'padding':'1rem','maxWidth':'500px','textAlign':'center'}}>
    <h1>Interview</h1>
    <br />
    <br />
    <p>
    Email@abc.com has invited you as panelist for the interview process to be held from the 20th of November till the 27th of november for the position of Business Developer. Kindly confirm that you will be availale for these scheduled days, and the interview process
    </p>
    <br />
    <br />
    <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','maxWidth':'300px','margin':'0 auto'}}>
        <Button >Confirm</Button>
        <Button color={'lightBlueOutline'}>Unavailable</Button>      
    </Box>
</Box>
  )
}