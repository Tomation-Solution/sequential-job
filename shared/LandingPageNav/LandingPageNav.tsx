import { ReactElement } from "react-markdown/lib/react-markdown"
import Box from "../Box/Box"
import Logo from '../../asset/logo.svg'
import { useMediaQuery } from 'react-responsive'
import { LandingPageNavContainer,SubMenue } from "./LandingPageNav.style"
import {GiHamburgerMenu} from 'react-icons/gi'
import { useEffect, useState } from "react"
import {AiFillCloseCircle} from  'react-icons/ai'
import { useRouter } from "next/router"
import { useTheme } from "next-themes";
import Button from "../Button/Button"
import {BsArrowRight} from 'react-icons/bs'
import Image from "next/image"

const SigninSigUoBtnCss = {'padding':'.8rem 1.2rem','borderRadius':'5px','fontWeight':'bold'}
const LandingPageNav = ():ReactElement=>{
    const route = useRouter()
  const [hasfully_loaded,setHasfully_loaded] =useState(false)
    const isTab = useMediaQuery({
        query: '(min-width: 500px)'
      })
      const isLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
      })

    const handleRoute= (e:any,path:string):void=>{
      e.preventDefault()
        route.push(path)
    }
    useEffect(()=>{
      setHasfully_loaded(true)
    },[])
    return (
        <LandingPageNavContainer>
          <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','padding':'1rem .3rem','@bp2':{
            'padding':'.5rem','max-width':'1300px','margin':'0 auto'
          }}}>
            <Box css={{'width':'100px','@bp2':{
              'width':'150px','cursor':'pointer'
            }}} onClick={e=>route.push('/')}>
              {hasfully_loaded&&<Image alt='sequential'  style={{'width':'100%','height':'100%'}} src={Logo} />}
              {/* <img src={Logo.src} alt=""  style={{'width':'100%','height':'100%'}}/> */}
            
            </Box>

            <Box css={{'display':'flex','width':'200px','justifyContent':'space-between',}}>
              <Button css={SigninSigUoBtnCss} onClick={e=>{
                handleRoute(e,'/job_seeker_signup/')
              }}>Sign up</Button>
              <Button color={'lightBlueShadow'} 
               onClick={e=>{
                handleRoute(e,'/signin/')
              }}
              css={SigninSigUoBtnCss}>Log in</Button>
            </Box>
          </Box>
            
          <Box css={{ 'backgroundColor':'#fbfefe',}}>
          <SubMenue>
            <ul className="first_sub">
              <li><a onClick={(e)=>{
                handleRoute(e,'/searchpage')
              }}>Find Job</a></li>
              <li><a onClick={(e)=>{
                handleRoute(e,'/upload-cv')
              }}>Upload CV</a></li>
            </ul>
            <ul className="sec_sub">
              <li><a onClick={(e)=>{
                handleRoute(e,'/signup')
              }}>For Employers <BsArrowRight style={{'transform':'translateY(3px)'}}/></a></li>
            </ul>
          </SubMenue>
          </Box>
        </LandingPageNavContainer>
    )
}

export default LandingPageNav