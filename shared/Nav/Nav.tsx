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
import { useRouter } from 'next/router'
const Nav = ():React.ReactElement => {
  
  const route = useRouter()
  const extra_links = [
  {
    label:'Set Interview',
    route:'/interviews/create-Interview/',
    icon:<FaStickyNote/>
  },
  {
    label:'Set Test',
    route:'/jobs/CvFilteringQuetion/',
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
  const handleRoute = (value:string):void=>{
    route.push(value)
  }
  return (
    <NavContainer>
      <h2>Browse Jobs</h2>
            <li  onClick={(e)=> handleRoute('/')}>
                <IoBagSharp />
                <p>Jobs</p>
            </li>

            <li onClick={(e)=>handleRoute('/jobs/')}>
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
              <li  key={index} onClick={()=>route.push(data.route)}>
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