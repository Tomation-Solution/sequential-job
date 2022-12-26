

import React from 'react'
import Box from '../../Box/Box'

type Prop = React.PropsWithChildren<{
    
}>
 const InterviewDateSelect = ({children}:Prop):React.ReactElement => {
  return (
   <Box css={{'padding':'.9rem .6rem','backgroundColor':'rgba(255, 255, 255, 0.18)','color':'$white','width':'120px','textAlign':'center','borderRadius':'10px'}}>
      <p>  {children}</p>
   </Box>
  )
}


export default InterviewDateSelect