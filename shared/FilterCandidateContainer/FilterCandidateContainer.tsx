import React from 'react'
import Box from '../Box/Box'
import Button from '../Button/Button'
import FilterCandidateRow from '../FilterCandidateRow/FilterCandidateRow'

const btnStyle ={'width':'45%','borderRadius':'999px','paddingTop':'.5rem','paddingBottom':'.5rem'}
const FilterCandidateContainer = () => {
  return (
<Box css={{
                        'color':'$white',
                        '@bp2':{
                     'maxWidth':'800px'
                    }}}>

                      {[...new Array(5)].map((data,index)=>(
                          <FilterCandidateRow key={index}/>
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