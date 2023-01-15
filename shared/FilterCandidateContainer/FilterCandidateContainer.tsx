import React from 'react'
import { getSortedJobCandidateResponse } from '../../service/api/candidate_related.api'
import Box from '../Box/Box'
import Button from '../Button/Button'
import FilterCandidateRow from '../FilterCandidateRow/FilterCandidateRow'


type Prop ={
  applicants:getSortedJobCandidateResponse[]
}
const btnStyle ={'width':'45%','borderRadius':'999px','paddingTop':'.5rem','paddingBottom':'.5rem'}
const FilterCandidateContainer = ({applicants}:Prop) => {
  return (
<Box css={{
                        'color':'$white',
                        '@bp2':{
                     'maxWidth':'800px'
                    }}}>

                      {applicants.map((applicant,index)=>(
                          <FilterCandidateRow  applicant={applicant} key={index}/>
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


export default FilterCandidateContainer