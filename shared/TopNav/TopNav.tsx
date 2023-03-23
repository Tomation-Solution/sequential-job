

import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavToolBox, TopNavContainer } from './TopNav.style'
import {IoMdNotifications} from 'react-icons/io'
import {AiTwotoneSetting} from 'react-icons/ai'
import Logo from '../../asset/logo.svg'
import UserLogo from '../../asset/user.jpg'
import { useMediaQuery } from 'react-responsive'
import {BiFilter} from 'react-icons/bi'
import { getUser } from '../../utils/extra_function'
import {BsFillMoonFill,BsSunFill} from 'react-icons/bs'
import Box from '../Box/Box'
import { useTheme } from "next-themes";

export const TopNav = () => {
  const user = getUser()
  const isTab = useMediaQuery({
    query: '(min-width: 500px)'
  })
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () =>
  setTheme(theme === "light" ? "dark" : "light");


  return (
    <TopNavContainer>
      <div 
      // style={{'border':'1px solid red'}}
      >
        <img src={Logo.src} alt=""  
        style={{'height':'100%','width':'100%'}}/>
      </div>

    {
      isTab?
      <SearchBar/>
    :<BiFilter/>
    }

    {
      isTab?
      <NavToolBox>
      <div>
        <img src={user?.profile_image?user.profile_image:UserLogo.src} alt="" />
        <p>{user?.full_name}</p>
      </div>
    
      <div>
      <IoMdNotifications/>
      {
        theme=='light'?
        <BsSunFill onClick={toggleTheme}/>
        :
        <BsFillMoonFill onClick={toggleTheme}/>
      }
      {/* <AiTwotoneSetting/> */}
      </div>
      </NavToolBox>:''
    }

    </TopNavContainer>
  )
}


export default TopNav