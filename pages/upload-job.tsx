import { NextPage } from 'next'
import React from 'react'
import GeneralLayout from '../layout/GeneralLayout/GeneralLayout'
import Box from '../shared/Box/Box'
import Button from '../shared/Button/Button'
import UploadBox from '../shared/UploadBox/UploadBox'
import {RiUploadCloudFill} from 'react-icons/ri'
import JobCard from '../shared/JobCard/JobCard'







const UploadJob:NextPage = () => {

    return (
      <GeneralLayout>
        <h2 style={{'color':'white','textAlign':'center'}}>Upload Jobs</h2>
        <Box 
            css={{'@bp3':{
                'display':'flex','justifyContent':'space-between',
                'maxWidth':'1500',
                'margin':'0 auto'
            }}}
        >
            <Box css={{
                '@bp2':{
                    'margin':'0 auto',
                    'maxWidth':'500px',
                }
            }}>
                <br /><br /><br /><br /><br /><br />
                <UploadBox>
                <RiUploadCloudFill style={{'color':'white','fontSize':'4rem'}}/>
                    
                </UploadBox>
                <h3 style={{'padding':'1rem 0','textAlign':'center','color':'white'}}>OR</h3>
                <Button css={{'margin':'0 auto'}} color={'lightBlueBtn'}>Manually Upload</Button>
            </Box>



            <Box css={{'display':'none','@bp3':{
                'display':'flex','flexDirection':'column',
                'justifyContent':'center','alignItems':'center'
            }}}>
                <h1>Live Jobs</h1>
                <br />
                {
                    [...new Array(4)].map(((data,index)=>(
                        <JobCard key={index}/>
                    )))
                }
            </Box>
        </Box>
    </GeneralLayout>
    )

}
export default UploadJob