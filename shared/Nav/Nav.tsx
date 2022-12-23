import React from 'react'
import { NavContainer,  } from './Nav.style'
import {IoBagSharp} from 'react-icons/io5'
import {CiCircleMore} from 'react-icons/ci'
import DropdownMenuDemo from '../DropdownMenuDemo/DropdownMenuDemo'
import { useMediaQuery } from 'react-responsive'
import {AiFillBell} from 'react-icons/ai'
import {RiUploadCloudFill} from 'react-icons/ri'
import {FaUserCog} from 'react-icons/fa'
import {FaStickyNote} from 'react-icons/fa'
import {IoMdHelpCircle} from 'react-icons/io'
import {FaUserLock} from 'react-icons/fa'
import {AiTwotoneDelete} from 'react-icons/ai'
import {GiUnlitBomb} from 'react-icons/gi'
const Nav = ():React.ReactElement => {
  const extra_links = [
  {
    label:'Set Interview',
    route:'#',
    icon:<FaStickyNote/>
  },
  {
    label:'Set Test',
    route:'#',
    icon:<FaStickyNote/>

  },
  {
    label:'Help',
    route:'#',
    icon:<IoMdHelpCircle/>
  },
  {
    label:'Change Password',
    route:'#',
    icon:<FaUserLock/>
  },
  {
    label:'Delete Account',
    route:'#',
    icon:<AiTwotoneDelete/>
  },
  {
    label:'Logout',
    route:'#',
    icon:<GiUnlitBomb/>
  },
  ]

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  return (
    <NavContainer>
      <h2>Browse Jobs</h2>
<li >
                <IoBagSharp />
                <p>Jobs</p>
            </li>

            <li >
                <RiUploadCloudFill/>
                <p>Upload</p>
            </li>

            <li >
                <AiFillBell/>

                <p>Notification</p>
            </li>

            <li >
                <FaUserCog/>
                <p>Profile</p>
            </li>



      {
        !isDesktopOrLaptop?
        <DropdownMenuDemo
        links={extra_links}
        trigger_btn={<li className='more'>
        <CiCircleMore/>
        <p>More</p>
        </li>
        }/>: <div style={{'marginTop':'20px'}}>
          {
            extra_links.map((data,index)=>(
              <li  key={index}>
                {data.icon}
                <p>{data.label}</p>
            </li>
            ))
          }
        </div>
      }

            


    </NavContainer>
  )
}


export default Nav