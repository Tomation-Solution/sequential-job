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
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import { getUser } from '../../utils/extra_function'




const Nav = ():React.ReactElement => {
  
  const route = useRouter()
  const extra_links = [
  {
    label:'Set Interview',
    route:'/interviews/create-Interview/',
    icon:<FaStickyNote/>
  },
  {
    label:'Set Sorting Quetion',
    route:'/jobs/CvFilteringQuetion/',
    icon:<FaStickyNote/>

  },
  {
    label:'Set Test',
    route:'/jobs/JobTest/',
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
  const user = getUser()
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const handleRoute = (value:string):void=>{
    route.push(value)
  }
  return (
    <NavContainer>
      <h2>Browse Jobs</h2>

            <li  onClick={(e)=> handleRoute('/dashboard_index')}>
                <IoBagSharp />
                <p>Jobs</p>
            </li>

            {
        user?.user_type=='company'?
            <li onClick={(e)=>handleRoute('/jobs/add-jobs/')}>
                <RiUploadCloudFill/>
                <p>Create Job</p>
            </li>:''
      }

{
  user?.user_type==='job_seakers'?
  <li onClick={(e)=>handleRoute('/job_seeker/interviews/')}>
  <AiFillBell/>

  <p>View Invitations</p>
</li>:''
}
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
            extra_links.filter((value)=>{
              if(user?.user_type!='company'){
                if(value.label==='Set Interview'){
                  return false
                }
                if(value.label==='Set Sorting Quetion'){
                  return false
                }
                if(value.label==='Set Test'){
                  return false
                }
              }
              return true
            }).map((data,index)=>(
              <li  key={index} onClick={()=>{
                if(data.label==='Logout'){
                  cookieCutter.set('user',null)
  
                  route.push('/signin')
                }else{
                  route.push(data.route)
                }
              }}>
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