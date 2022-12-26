import React from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'
import FilterCandidateRow from '../FilterCandidateRow/FilterCandidateRow'
import ScheduledCandidate from '../ScheduledCandidate/ScheduledCandidate'


const btnStyle ={'width':'45%','borderRadius':'999px','paddingTop':'.5rem','paddingBottom':'.5rem'}


 const ListOfScheduledCandidate = () => {
  return (
<Box css={{
                        'color':'$white',
                        '@bp2':{
                     'maxWidth':'800px'
                    }}}>
                      <Box css={{'display':'flex','justifyContent':'space-between','maxWidth':'200px','margin':'0 auto'}}>
                        <p><strong><small>Name</small></strong></p>
                        <p><strong><small>Date</small></strong></p>
                        <p><strong><small>Time</small></strong></p>
                      </Box>
                      {[...new Array(5)].map((data,index)=>(
                          <ScheduledCandidate key={index}/>
                      ))}

                      <br />
                      <br />
                      <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between',}}>
                        <Button css={btnStyle}>
                        Invite all
                        </Button>

                        <Button color={'lightBlueOutline'} css={btnStyle}>
                        Invite all checked
                        </Button>
                      </Box>
                    </Box>
  )
}

export default ListOfScheduledCandidate