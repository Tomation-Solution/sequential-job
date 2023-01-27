

import React from 'react'
import Box from '../../Box/Box'

type Prop = React.PropsWithChildren<{
  is_selected?:boolean;
  choosed?:boolean
}>
 const InterviewDateSelect = ({children,is_selected=false,choosed=false}:Prop):React.ReactElement => {
  return (
   <Box css={{'padding':'.9rem .6rem','backgroundColor':is_selected?'white':'rgba(255, 255, 255, 0.18)',
   'color':is_selected?'$lightBlue':'$white','width':'120px','textAlign':'center','borderRadius':'10px',
   'border':`1px solid ${choosed?'$lightBlue':'transparent'}`
   }}>
      {/* 
      interview registration
      profile upload
      Writing Test as a job seekr(with image)
      uploading cv
      upload docs for a job if needed
      notification for jobs when it get created
      setting jobs  to life
      */}
      <p>  {children}</p>
   </Box>
  )
}


export default InterviewDateSelect

