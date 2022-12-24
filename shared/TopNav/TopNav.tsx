

import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavToolBox, TopNavContainer } from './TopNav.style'
import {IoMdNotifications} from 'react-icons/io'
import {AiTwotoneSetting} from 'react-icons/ai'
import Logo from '../../asset/logo.svg'
import UserLogo from '../../asset/user.jpg'
import { useMediaQuery } from 'react-responsive'
import {BiFilter} from 'react-icons/bi'


export const TopNav = () => {

  const isTab = useMediaQuery({
    query: '(min-width: 500px)'
  })
  
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
        <img src={UserLogo.src} alt="" />
        <p>Tomiwa Prom</p>
      </div>
    
      <div>
      <IoMdNotifications/>
        <AiTwotoneSetting/>
      </div>
      </NavToolBox>:''
    }

    </TopNavContainer>
  )
}


export default TopNav