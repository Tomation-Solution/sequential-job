import React from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'

const FilterCandidateRow = () => {
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
        <p>70%</p>
        <Button css={{'padding':'.4rem 1rem','width':'100px'}}>View Cv</Button>
        <Button color={'lightBlueOutline'} css={{'padding':'.4rem 1rem','width':'100px'}}>Invite</Button>
    </Box>
  )
}


export default FilterCandidateRow