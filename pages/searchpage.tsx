import { NextPage } from "next";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
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
import Pane from "../shared/Pane";
import SearchPageJobPane from "../shared/SearchPageJobPane/SearchPageJobPane";
import CheckBox from "../shared/Checkbox/Checkbox";


const Searchpage:NextPage =()=>{
    const route = useRouter()
    const { job_title,job_type } = route.query
    const searchState = useSelector(selectSearch)
    const SearchTitle = ()=>searchState.job_title?searchState.job_title:job_title+''
    const SearchType =()=>`${searchState.job_type?searchState.job_type:job_type+''}` 
    const [getData,setGetData]=useState(false)
    const {data:jobs,isLoading,error,refetch} = useQuery('unathGetJobsApi',()=>unathGetJobsApi({ 'job_title':SearchTitle(),'job_type':SearchType()}),{
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
            <Preloader loading={isLoading} />
        <Box css={{'backgroundColor':'#f2f2f2'}}>
            <Box css={{"padding":'2rem .3rem',
            'position':'relative',
            '& > div:nth-child(1)':{
                display:'none',
            },
            '@bp900':{
                'display':'flex','gap':'30px',
                padding:'2rem 1rem',
                'maxWidth':'1500px','margin':'0 auto',
                '& > div:nth-child(1)':{
                    display:'block',
                    width:'25%',
                    'height':'100vh',
                    'position':'sticky',
                    'top':'0',
                    overflowY:'scroll'
                
                },
                '& > div:nth-child(2)':{
                    width:'75%'
                },  
            }}}>
                
                <Pane css={{
                padding:'2rem'}}>
                <PaneFilterBox  
                head="Job Type"
                data={[
                    {name:'Full Time',number:'0'},
                    {name:'Part Time',number:'0'},
                    {name:'Freelance',number:'0'},
                    {name:'Training',number:'0'},
                ]}
                />
                 <PaneFilterBox  
                head="Experience"
                data={[
                    {name:'Expert',number:'0'},
                    {name:'Intermediate',number:'0'},
                    {name:'Entry',number:'0'},
                ]}
                />
                <PaneFilterBox  
                head="Salary"
                data={[
                    {name:'Ngn 500,000-above',number:'0'},
                    {name:'Ngn 200,000-500,000',number:'0'},
                    {name:'Ngn 50,000-200,000',number:'0'},
                ]}
                />
                </Pane>
                <Box css={{
                }}>
                    <Box css={{'display':'flex','flexWrap':'wrap','justifyContent':'space-between',
                    'gap':'10px','color':'#797979','alignItems':'center',
                    'p':{
                        'fontSize':'1.1rem'
                    },
                    '.sortby':{
                        'color':'#797979'
                    },
                    '.sortbyValue':{
                        'color':'black'
                    },
                    'h1':{
                        'fontWeight':'lighter'
                    }
                    }}>
                        <h1>{jobs?.length} Jobs Match</h1>
                        <Box>
                            <Box css={{'display':'flex','gap':'10px'}}>
                            <p className="sortby">sort by</p>
                            <p className="sortbyValue">Newest</p>
                            </Box>
                            {/*  */}
                        </Box>
                    </Box>

                    {
                            jobs?.map((d,i)=>(
                                <>
                             <br />
                    <SearchPageJobPane 
                    {...d}
                    />
                                </>
                                ))
                        }
                </Box>

            
            </Box>       

        </Box>
        </LandingPageLayout>
    )
}
export default Searchpage

type PaneFilterBoxI = {
    head:string,
    data:{name:string,number:string|number}[]
}
const PaneFilterBox =({head,data}:PaneFilterBoxI)=>{
    return (
        <Box css={{'marginBottom':'25px'}}>
            <Box css={{
            'display':'flex',
            alignItems:'center',
            'justifyContent':'space-between',
            'h2':{'color':'black'},
            'p':{'color':'$lightBlue'},
        }}>
        <h2>{head}</h2>
        <p>Clear</p>
    </Box>
    <br />
    {
        data?.map(({name,number},index)=>(
            <Box
            key={index}
            css={{'color':'#6d6d6d !important','display':'flex','justifyContent':'space-between','alignItems':'center'}}>
            <Box css={{'display':'flex','gap':'5px','padding':'1rem 0'}}>
                <CheckBox onCheck={value=>{}}/> 
            <p style={{'color':"#6d6d6d"}}>{name}</p>
            </Box>
            <p>{number}</p>
        </Box>
        ))
    }
        </Box>
    )
}