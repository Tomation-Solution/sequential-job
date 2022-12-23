import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import DropdownMenuDemo from '../shared/DropdownMenuDemo/DropdownMenuDemo'
import TabsComp from '../shared/Tabs/Tabs'



const Home:NextPage = ()=>{

  return (
    <GeneralLayout>
      <TabsComp
        data={[
{          'key':'Live',
          'label':'Live',
          'template':<h1>Hello worlds from live</h1>},
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
