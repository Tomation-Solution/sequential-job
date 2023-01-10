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
import { get_jobs_api } from '../service/api/job.api'
import Preloader from '../shared/Preloader/Preloder'
// console.log({'token stuff':cookieCutter.get('user')})


const Home:NextPage = ()=>{ 
 const {status,error,data,isError} = useQuery('jobs',get_jobs_api)
 console.log(data)

 return (
    <GeneralLayout>
      <Preloader loading={status=='loading'} />
      <TabsComp
        data={[
{          'key':'Live',
          'label':'Live',
          'template':<Box css={{
              '@bp1':{
                'display':'flex',
                'flexWrap':'wrap'
              },
              '@bp3':{
                'display':'grid',
                'gridTemplateColumns':'repeat(3,360px)',
                'gap':'10px'
              }
          }}>
          {
            data?
          data.map((job,index)=>(
              <JobCard job={job} key={index}/>
            )):''
            
          }
          </Box>
          
        },
          { 
            'key':'Closed',
          'label':'Closed',
          'template':
          <Box css={{
            '@bp1':{
              'display':'flex',
              'flexWrap':'wrap'
            },
            '@bp3':{
              'display':'grid',
              'gridTemplateColumns':'repeat(3,360px)',
              'gap':'10px'
            }
        }}>
         {
            data?
          data.map((job,index)=>(
              <JobCard job={job} key={index}/>
            )):''
            
          }
        </Box>
        
      },
        ]}
      />
  
    </GeneralLayout>
  )
}

export default Home
