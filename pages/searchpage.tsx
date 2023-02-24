import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import {GoSettings} from 'react-icons/go'
import JobCard from "../shared/JobCard/JobCard";
import JobCardV2 from "../shared/JobCardV2/JobCardV2";
import bluearrow from '../asset/bluearrow.png'
import { useQuery } from "react-query";
import { JobType, unathGetJobsApi } from "../service/api/job.api";
import Preloader from "../shared/Preloader/Preloder";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useToast from "../hooks/useToastify";
import OffCanvas from "../shared/OffCanvas/OffCanvas";
import { useMediaQuery } from "react-responsive";
import JobDetail from "../shared/JobDetail/JobDetail";
import JobDetailV2 from "../shared/JobDetailsVerion2/JobDetail";
import LandingPageSearchBar from "../shared/LandingPageSearchBar/LandingPageSearchBar";
import { useSelector } from "react-redux";
import { selectSearch } from "../redux/Search/SearchSlice";


const Searchpage:NextPage =()=>{
    const route = useRouter()
    const { job_title,job_type } = route.query
    const searchState = useSelector(selectSearch)
    const SearchTitle = ()=>searchState.job_title?searchState.job_title:job_title+''
    const SearchType =()=>`${searchState.job_type?searchState.job_type:job_type+''}` 
    const [getData,setGetData]=useState(false)
    const {data,isLoading,error,refetch} = useQuery('unathGetJobsApi',()=>unathGetJobsApi({ 'job_title':SearchTitle(),'job_type':SearchType()}),{
        // 'enabled':getData,
        
    })
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1250px)'
      })
    const {notify} = useToast()
    const [currentJob,setCurrentJob] = useState<null|JobType>(null)
    const [isOpen, setIsOpen] = useState(false)
    const handleJobDetail = (job:JobType)=>{
        setIsOpen(true)
        setCurrentJob(job)
  
      }

    //   useEffect(()=>{
    //     if(job_title || job_type){
    //         setGetData(true)
    //     }
    //   },[route.isReady])
    //   useEffect(()=>{
    //     setGetData(true)
    //   },[])

      useEffect(()=>{
        // refetch
        console.log(searchState)
        if(searchState.job_title){
            refetch()
        }
        if(searchState.job_type){
            refetch()
        }
      },[searchState.job_title,searchState.job_type])
    return (
        <LandingPageLayout>
         <Box css={{'backgroundColor':'$thickBlue','padding':'1rem',}}>
      <Box css={{'maxWidth':'1000px','margin':'0 auto'}}>
        <LandingPageSearchBar/>
      </Box>
      </Box>
      <br />
            <Preloader loading={isLoading} />
            <Box css={{'color':'#212121','span':{'color':'#0F565F'},'backgroundColor':'white','padding':'2rem .8rem'}}>
                <h2 style={{'maxWidth':'1280px','margin':'0 auto'}}>Search results 
                <span>{' '}{SearchTitle()} , {SearchType()}</span>
                </h2>
            </Box>
            <Box  css={{'backgroundColor':'#f2f2f2',}}>


                <Box css={{'maxWidth':'1200px','margin':'0 auto'}}>
                    <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'10px auto','padding':'1rem'}}>
                        <p style={{'color':'#212121'}}>All results</p>
                        <Button css={{'borderRadius':'5px','padding':'.9rem .6rem',}}><GoSettings style={{'marginRight':'5px'}}/>Filter</Button>
                    </Box>

                    <Box css={{'display':'flex','justifyContent':'space-between'}}>
                    <Box css={!isDesktopOrLaptop?{'display':'grid','justifyContent':'center','alignItems':'center',
                    '@bp2':{
                        'gridTemplateColumns':'1fr 1fr','gap':'15px'
                    },
                    '@bp3':{
                        'gridTemplateColumns':'1fr 1fr 1fr'

                    }
                }:{}}>
                        {
                            data?.map((job,index)=>(
                                <Box key={index} onClick={()=>handleJobDetail(job)}>
                                    <JobCardV2 job={job} title={job.job_title}/>
                                    <br />
                                </Box>
                            ))
                        }
                    
                    </Box>
                    {
                        isDesktopOrLaptop?
                        <Box css={{'padding':'2rem .8rem' ,'boxShadow':'0px 4px 9px rgba(33, 33, 33, 0.1)','width':'60%','backgroundColor':'white',
                        'textAlign':'center','h1,p':{'color':'#212121'}}}>

     {currentJob?<JobDetailV2 currentJob={currentJob}/>
     :
                            <Box css={{'maxWidth':'600px','margin':'0 auto','padding':'1rem 2rem'}}>
                                <h1>Get noticed by top employers!</h1><br />
                                <p>Do you want to speed up your job search? Post your CV on Sequential Jobs and let employers know you are open to opportunities. Plus, receive relevant job recommendations in your inbox.</p>
                                <Button
                                onClick={(e)=>{
                                    notify('You Need to create an account','success')
                                    route.push('/job_seeker_signup')
                                }} css={{'borderRadius':'5px','padding':'.8rem 1rem','fontSize':'.9rem','margin':'10px auto'}} >Send Us Your CV</Button>
                                <br />
                                <p 
                                onClick={(e)=>{
                                    notify('You Need to create an account','success')
                                    route.push('/job_seeker_signup')
                                }}
                                style={{'color':'#24CDE2'}}>Send Us Your CV
                                <img src={bluearrow.src}  style={{marginLeft:'10px'}} alt="" />
                                </p>
                            </Box>
    }

                        </Box>:''
                    }
                    </Box>
                </Box>
            </Box>

{
   !isDesktopOrLaptop?

            <OffCanvas
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      direction={isDesktopOrLaptop?'right':'bottom'}
      size={80}
     >
     {currentJob&&<JobDetailV2 currentJob={currentJob}/>}

     </OffCanvas>
     :''
}
        </LandingPageLayout>
    )
}
export default Searchpage