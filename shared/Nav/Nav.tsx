import React, { useEffect } from 'react'
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
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { selectjobSeekerInvites, updateInviteCount } from '../../redux/JobSeekerInterviewNotifcation/JobSeekerInterviewNotifcationSlice'
import { get_interviews } from '../../service/api/jobSeekerInterview.api'
import { useQuery } from 'react-query'
import Box from '../Box/Box'



const Nav = ():React.ReactElement => {
  const user = getUser()

  const {isLoading,data,status} = useQuery('get_interviews_for_jobseekers',get_interviews,{
    enabled:user?.user_type==='job_seakers'?true:false
  })
  const { invites_count } = useAppSelector(selectjobSeekerInvites)
  const dispatch = useAppDispatch()


  const route = useRouter()
  const extra_links = [
  {
    label:'Set Interview',
    route:'/interviews/create-Interview/',
    icon:<FaStickyNote/>,
    show:user?.user_type=='company'?true:false
  },
  {
    label:'Set CV Sorting Questions',
    route:'/jobs/CvFilteringQuetion/',
    icon:<FaStickyNote/>,
    show:user?.user_type=='company'?true:false

  },
  {
    label:'Set Test Questions',
    route:'/jobs/JobTest/',
    icon:<FaStickyNote/>,
    show:user?.user_type=='company'?true:false
  },
  {
    label:'Help',
    route:'#',
    icon:<IoMdHelpCircle/>,
    show:true
  },
  {
    label:'Change Password',
    route:'/change_password',
    icon:<FaUserLock/>,
    show:true

  },
  {
    label:'Delete Account',
    route:'/delete_account/',
    icon:<AiTwotoneDelete/>,
    show:true

  },
  {
    label:'Logout',
    route:'#',
    icon:<GiUnlitBomb/> ,
    show:true

  },
  ]
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1000px)'
  })
  const handleRoute = (value:string):void=>{
    route.push(value)
  }
  useEffect(()=>{
    //
    if(status==='success'){
      dispatch(updateInviteCount(data.length))
    }
  },[status])
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
  <li style={{'position':'relative'}} onClick={(e)=>handleRoute('/job_seeker/interviews/')}>
  <AiFillBell/>

  <Box css={{'position':'absolute','backgroundColor':'red','color':'white','display':'inline-block','width':'20px','height':'20px','textAlign':'center','borderRadius':'50%','right':'0','top':'0'}}>
  {status==='loading'?'...':invites_count+'+'}
  </Box>
  <p>View Invitations </p>
</li>:''
}
            <li >
                <AiFillBell/>

                <p>Notification</p>
            </li>

            <li onClick={(e)=>handleRoute('/profile/')}>
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
                if(value.label==='Set CV Sorting Questions'){
                  return false
                }
                if(value.label==='Set Test Questions'){
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