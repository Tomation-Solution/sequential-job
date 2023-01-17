import React from 'react'
import Box from '../../shared/Box/Box'
import JobCard from '../../shared/JobCard/JobCard'
import GeneralLayout from '../GeneralLayout/GeneralLayout'



type Prop = React.PropsWithChildren<{
    header:string
}>
 const LiveJobWithOtherContentLayout = ({header,children}:Prop):React.ReactElement => {
  return (
    <GeneralLayout>
    <h2 style={{'color':'white','textAlign':'center'}}>{header}</h2>
    <Box
        css={{'@bp3':{
            'display':'flex','justifyContent':'space-between',
            'maxWidth':'1500',
            'margin':'0 auto'
        }}}
    >
        <Box css={{
            '@bp2':{
                'margin':'0 auto',
                'maxWidth':'500px',
            }
        }}>
            {children}
        </Box>


{/* 
        <Box css={{'display':'none','@bp3':{
            'display':'flex','flexDirection':'column',
            'justifyContent':'center','alignItems':'center'
        }}}>
            <h1>Live Jobs</h1>
            <br />
            {
                [...new Array(4)].map(((data,index)=>(
                  <div></div>
                    <JobCard key={index}/>
                )))
            }
        </Box> */}
    </Box>
</GeneralLayout>
  )
}


export default LiveJobWithOtherContentLayout