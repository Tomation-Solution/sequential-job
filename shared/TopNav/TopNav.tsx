

import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import { NavToolBox, TopNavContainer } from './TopNav.style'
import {IoMdNotifications} from 'react-icons/io'
import {AiTwotoneSetting} from 'react-icons/ai'
import Logo from '../../asset/logo.svg'
import UserLogo from '../../asset/user.jpg'
// 
export const TopNav = () => {
  return (
    <TopNavContainer>
      <div 
      // style={{'border':'1px solid red'}}
      >
        <img src={Logo.src} alt=""  
        style={{'height':'100%','width':'100%'}}/>
      </div>

      <SearchBar/>

      <NavToolBox>
      <div>
        <img src={UserLogo.src} alt="" />
        <p>Tomiwa Prom</p>
      </div>
    
      <div>
      <IoMdNotifications/>
        <AiTwotoneSetting/>
      </div>
      </NavToolBox>
    </TopNavContainer>
  )
}


export default TopNav