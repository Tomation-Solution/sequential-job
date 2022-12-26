import React from 'react'
import Box from '../../Box/Box'
import Button from '../../Button/Button'
import InputWithLabel from '../../InputWithLabel/InputWithLabel'
import SelectComponent from '../../Select/Select'
import InterviewDateSelect from '../InterviewDateSelect/InterviewDateSelect'

const SelectInterviewSchedule = ():React.ReactElement => {
  return (
    <Box>
        <h2>Set Up Interview</h2>
<br /><br />

<Box>
       <InputWithLabel label='Set Available date  for candidates to pick from:' type='date'/>
       <br />
       <p>Dates Selected</p>
       <br />
       
       <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
        {[...new Array(5)].map((data,index)=>(
            <InterviewDateSelect key={index}>
            Monday ,
            14th August,
            2022
        </InterviewDateSelect>
        ))}
       </Box>
<br />
       <InputWithLabel label='Set Available Time  for candidates to pick from:' type='time'/>
       <br />
       <p>Time Selected</p>
       <br />
       
       <Box css={{'display':'flex','flexWrap':'wrap','gap':'10px 6px'}}>
        {[...new Array(5)].map((data,index)=>(
            <InterviewDateSelect key={index}>
            1:00pm
        </InterviewDateSelect>
        ))}
       </Box>
       <br />
       <p>
       Invite member of Panel 
       </p>
       <br />
       <Button color={'whiteBtn'} css={{'width':'80%','padding':'1rem'}}>
      {'  '} Add Email Address
       </Button>
</Box>
    </Box>
  )
}


export default SelectInterviewSchedule