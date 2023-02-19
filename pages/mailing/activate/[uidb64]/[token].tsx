import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useToast from '../../../../hooks/useToastify';
import GeneralLayout from '../../../../layout/GeneralLayout/GeneralLayout';
import LandingPageLayout from '../../../../layout/LandingPageLayout/LandingPageLayout';
import api, { url } from '../../../../service/axios';
import Box from '../../../../shared/Box/Box';
import Button from '../../../../shared/Button/Button';
import Preloader from '../../../../shared/Preloader/Preloder';





const ActivateAccount:NextPage = ()=>{

  const route = useRouter()
  const {uidb64, token} = route.query
  const {notify} = useToast()
  const [status,setStatus] = useState<'loading'|'error'|'okay'>('loading')
  const handleRoute = (value:string)=>{
    //
    route.push(value)
  }

  const handleValidate = async( )=>{
    //
    setStatus('loading')
    try{
      const resp =await  axios.get(`${url}/mailing/activate/${uidb64}/${token}/`)
      setStatus('okay')
      notify('Email Verfication Successfull','success')
      //mission acomplised
    }catch(errr){
      setStatus('error')
      notify('Invalid Token','error')
    }
  }
  useEffect(()=>{
    if(typeof uidb64 =='string'){
      handleValidate()
    }
  },[route.isReady])
  return (
    <LandingPageLayout>
     <Preloader loading={ status=='loading'}/>

     <Box css={{'color':'$thickBlue'}}>

       {/* <Preloader loading={status=='loading'}/> */}
       <div style={{'display':'flex','alignItems':'center','justifyContent':'center','height':'100vh','textAlign':'center'}}>
        {
          status==='okay'?
            <div style={{'maxWidth':'700px',}}>
              <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>Your Account Has Been<span style={{'color':'#24CDE2'}}> Verified</span></h1>
              <br />
              <p>Let The Job Hunt Begin!!</p> 
              <br />
              <Button css={{'padding':'1rem','width':'150px','borderRadius':'10px','margin':'0 auto'}}
                onClick={()=>handleRoute('/signin')}
              >Explore</Button>
            </div>:
            ''
           
        }
         {
        status==='error'?
        <div style={{'maxWidth':'700px',}}>
        <h1>Invalid Token Or You Have Been activated</h1>
        <br />
        <Button css={{'padding':'1rem','width':'150px','borderRadius':'10px','margin':'0 auto'}}
          onClick={()=>handleRoute('/signin')}
        >Try to Sign In</Button>
      </div>:''
      }
      </div>
     
     </Box>
    </LandingPageLayout>
  )
}

export default ActivateAccount