import React from 'react'
import { getSortedJobCandidateResponse } from '../../service/api/candidate_related.api'
import Box from '../Box/Box'
import Button from '../Button/Button'



type Prop ={
  applicant:getSortedJobCandidateResponse
}

const FilterCandidateRow = ({applicant}:Prop) => {
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

<p>{applicant.jobseekers.email}</p>
        <p>{applicant.filter_quetions_score}</p>
        <Button css={{'padding':'.4rem 1rem','width':'100px'}} onClick={(e)=>{
          window.open(applicant.jobseekers.cv_url, '_blank')
        }}>View Cv</Button>
        <Button color={'lightBlueOutline'} css={{'padding':'.4rem 1rem','width':'100px'}}>Invite</Button>
    </Box>
  )
}


export default FilterCandidateRow