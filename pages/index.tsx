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
import { useEffect, useState } from 'react'
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import GetInstance from '../shared/Editor'
import "easymde/dist/easymde.min.css";
import SimpleMDE from "easymde";
import api from '../service/axios'
// console.log({'token stuff':cookieCutter.get('user')})


const Home:NextPage = ()=>{ 
  const [simpleMdeInstance,setSimpleMdeInstance] =  useState<SimpleMDE | null>(null);

  console.log({simpleMdeInstance})
  const dummySendData =async ()=>{
    const form = new FormData()
    form.append('job_title','Title of Job')
    form.append('job_title',JSON.stringify(false))
    form.append('location','Your Truly')
    form.append('job_type','on_site')
    form.append('salary',JSON.stringify(20000))
    form.append('currency','naira')
    form.append('job_required_document','cv,death_date,birth_day')
    if(simpleMdeInstance){
     
      // form.append('description',JSON.stringify(simpleMdeInstance))
    }
    // console.log(typeof simpleMdeInstance?.value())
    console.log( simpleMdeInstance?.value())
    // try{
    //   const resp = await api.post('/jobs/company-job-handler/',form)
    //   console.log({'response':resp.data})
    // }catch(err:any){
    //   console.log({err})
    // }
  }
  return (
    <GeneralLayout>
      <GetInstance setInstance={setSimpleMdeInstance}/>
      <Button onClick={(e)=>dummySendData()}>Send</Button>
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
            [...new Array(9)].map((data,index)=>(
              <JobCard key={index}/>
            ))
            
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
          [...new Array(3)].map((data,index)=>(
            <JobCard key={index}/>
          ))
          
        }
        </Box>
        
      },
        ]}
      />
  
    </GeneralLayout>
  )
}

export default Home
