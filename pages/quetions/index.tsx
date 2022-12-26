import { NextPage } from 'next'
import React from 'react'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import UploadBox from '../../shared/UploadBox/UploadBox'
import {RiUploadCloudFill} from 'react-icons/ri'
import JobCard from '../../shared/JobCard/JobCard'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'




export const Quetions:NextPage = () => {
  return (
    <LiveJobWithOtherContentLayout
    header='Application Sorting'
    >
    
              <br /><br /><br /><br /><br /><br />
              <UploadBox>
              <RiUploadCloudFill style={{'color':'white','fontSize':'4rem'}}/>
                  
              </UploadBox>
              <h3 style={{'padding':'1rem 0','textAlign':'center','color':'white'}}>OR</h3>
              <Button css={{'margin':'0 auto'}} color={'lightBlueBtn'}>Manually Upload</Button>
    
  </LiveJobWithOtherContentLayout>
  )
}


export default Quetions