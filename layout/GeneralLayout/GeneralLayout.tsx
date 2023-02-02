import { useRouter } from "next/router"
import React, { useEffect } from "react"
import Box from "../../shared/Box/Box"
import Nav from "../../shared/Nav/Nav"
import TopNav from "../../shared/TopNav/TopNav"
import { GeneralLayoutStyle, MainBoardStyle } from "./GeneralLayout.style"
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import useToast from "../../hooks/useToastify"



type Prop  = React.PropsWithChildren<{
  remove_nav?:boolean
}>

 const GeneralLayout = ({ children,remove_nav=false }:Prop):React.ReactElement => {
  const route = useRouter()
  const {notify} = useToast()
  
  useEffect(()=>{
    if(route.isReady){
      if(!route.pathname.includes('/signin') && !route.pathname.includes('/signup')&& !route.pathname.includes('/mailing')){
  
        console.log(console.log(route.pathname),)
        const user = cookieCutter.get('user')
        if(!user){
          route.push('/signin')
          notify('Please Login','error')
        }
      }
    }
  },[route.isReady])
  return (
    <GeneralLayoutStyle>
       {/* this is were the top nav will sit */}
       {
        remove_nav?
        "":

       <TopNav/>
       }
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
         {
           remove_nav?
           "":
           
           <Nav/>
       }
         
        <MainBoardStyle>
          {children}
          </MainBoardStyle>
       </Box>
    </GeneralLayoutStyle>
  )
}

export default GeneralLayout
