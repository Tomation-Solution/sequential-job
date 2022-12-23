import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Box from '../shared/Box/Box'
import DropdownMenuDemo from '../shared/DropdownMenuDemo/DropdownMenuDemo'
import JobCard from '../shared/JobCard/JobCard'
import TabsComp from '../shared/Tabs/Tabs'



const Home:NextPage = ()=>{

  return (
    <GeneralLayout>
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
            [...new Array(3)].map((data,index)=>(
              <JobCard key={index}/>
            ))
            
          }
          </Box>},
          { 
            'key':'Closed',
          'label':'Closed',
          'template':<h1>Hello worlds from Closed</h1>},
        ]}
      />
    </GeneralLayout>
  )
}

export default Home
