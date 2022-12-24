import React from "react"
import Box from "../../shared/Box/Box"
import Nav from "../../shared/Nav/Nav"
import TopNav from "../../shared/TopNav/TopNav"
import { GeneralLayoutStyle, MainBoardStyle } from "./GeneralLayout.style"




type Prop  = React.PropsWithChildren<{

}>

 const GeneralLayout = ({ children }:Prop):React.ReactElement => {
  return (
    <GeneralLayoutStyle>
       {/* this is were the top nav will sit */}
       <TopNav/>
       <Box css={{
       'width':'100%',
        '@bp3':{
          'display':'flex',
          'justifyContent':'space-between',
          // 'flexDirection':'row-reverse',
        // ':nth-child(1)':{//u can find it in line 50 of Nav.style.tsx
        //   'width':'20%',
        // },
        // ':nth-child(2)':{

        // },
       },
      }}>
         <Nav/>

         
        <MainBoardStyle>
          {children}
          </MainBoardStyle>
       </Box>
    </GeneralLayoutStyle>
  )
}

export default GeneralLayout
