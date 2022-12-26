


import { NextPage } from 'next'
import React from 'react'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'

export const PanelistIndexPage:NextPage = () => {
  return (
    <LiveJobWithOtherContentLayout
     header=''
    >
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
    </LiveJobWithOtherContentLayout>
  )
}


export default PanelistIndexPage