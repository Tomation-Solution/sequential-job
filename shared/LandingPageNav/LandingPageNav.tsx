import { ReactElement } from "react-markdown/lib/react-markdown"
import Box from "../Box/Box"
import Logo from '../../asset/logo.svg'
import { useMediaQuery } from 'react-responsive'
import { LandingNavBox, LandingPageNavContainer, NavLinks, NavLinksContainer } from "./LandingPageNav.style"
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from "react"
import {AiFillCloseCircle} from  'react-icons/ai'
import { useRouter } from "next/router"
import { useTheme } from "next-themes";

const LandingPageNav = ():ReactElement=>{
    const route = useRouter()
  const { theme, setTheme } = useTheme();

    const isTab = useMediaQuery({
        query: '(min-width: 500px)'
      })
      const isLaptop = useMediaQuery({
        query: '(min-width: 1000px)'
      })
    const [isOpen,setIsOpen] = useState(false) 

    const handleRoute= (path:string):void=>{
        route.push(path)
    }
    return (
        <LandingPageNavContainer>
           <Box css={{
            'display':'flex',
            'justifyContent':'space-between',
            'alignItems':'center',
            // 'overflow':'hidden',
            'padding':'1rem 2.5rem',
            '@bp3':{
    'maxWidth':'1000px','margin':'0 auto'

            }
           }}>
                <Box>
                    <img src={Logo.src} alt=""  
                    style={{'height':'100%','width':'100%'}}/>
                </Box>

{
    !isLaptop?
<GiHamburgerMenu style={{'color':theme!='light'?'black':'white','display':'block',
'fontSize':'1.5rem',
'transform':'translateY(-5px)','cursor':'pointer'}} onClick={()=>setIsOpen(true)}/>:''
}
            <LandingNavBox  css={{ 'transform':`translateX(${isOpen?0:100}%)`,'boxShadow': `0 2px 5px ${isOpen?'white':'black'}`,}}>
              
              {
                !isLaptop?
                <>
                <Box css={{'position':'absolute','right':'0','padding':'0 10px'}}>
                    <AiFillCloseCircle 
                    onClick={()=>setIsOpen(false)} 
                    style={{'position':'relative','cursor':'pointer'}}/>
                </Box>
                <br />
                <br />
                </>:''
              }
                <Box css={{'@bp3':{
                    'display':'flex',
                    'justifyContent':'space-between',
                    // 'border':'1px solid red',
                    'width':'100%'
                }}}>

                <NavLinksContainer>
                    <NavLinks>
                    <a  onClick={(e)=>{
                        e.preventDefault()
                        handleRoute('/')
                    }}>Find job</a>
                    </NavLinks>
                    <NavLinks>
                    <a onClick={(e)=>{
                        e.preventDefault()
                        handleRoute('/about')
                    }}>About</a>
                    </NavLinks>
                    <NavLinks>
                    <a onClick={(e)=>{
                        e.preventDefault()
                        handleRoute('/employer')
                    }}>Employer </a>
                    </NavLinks>

                    </NavLinksContainer>

                    <NavLinksContainer>
                            <NavLinks>
                                <a href="">
                                Upload your resume
                                </a>
                            </NavLinks>
                            <NavLinks>
                                <a onClick={(e)=>{
                        e.preventDefault()
                        handleRoute('/signin')
                    }}>
                                signin
                                </a>
                            </NavLinks>
                            <NavLinks>
                                <a href="">
                                Help</a> 
                            </NavLinks>
                    
                    </NavLinksContainer>
                </Box>


            </LandingNavBox>
           </Box>
        </LandingPageNavContainer>
    )
}

export default LandingPageNav