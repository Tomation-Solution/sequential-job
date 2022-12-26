import React from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'



 const ScheduledCandidate = () => {
  return (
    <Box
    css={{
        
        'display':'grid',
        'gridTemplateColumns':'repeat(2,1fr)',
        'padding':'.7rem','gap':'10px',
        'border':'1px solid $lightBlue','borderRadius':'10px','justifyItems':'center',
        '@bp2':{
            'display':'flex','alignItems':'center','justifyContent':'space-between',
            'border':'none'
        },
    }}
>

<p>Tomiwa Ayandele</p>
    <p>02-04-2022</p>
    <p>2:00PM</p>
    <Button css={{'padding':'.4rem 1rem','width':'100px'}}>Grade</Button>
</Box>
  )
}


export default ScheduledCandidate