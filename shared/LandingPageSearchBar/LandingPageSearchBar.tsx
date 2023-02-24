import Box from "../Box/Box"
import Button from "../Button/Button"
import { LandingPageInputField, LandingPageInputFieldContainer, LandingPageInputMainContainer } from "./LandingPageSearchBar.style"
import {BsSearch} from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'
import SpeakerSVG from '../../asset/speaker.svg'
import Searchbarsmall from '../../asset/searchbarsmall.svg'
import { useRouter } from "next/router"
import { useState } from "react"
import { useAppDispatch } from "../../redux/hook"
import { updateAllSearchState } from "../../redux/Search/SearchSlice"


const SearchSuggestion = ({name}:{name:string}):React.ReactElement=>{
    return (
        <Box css={{
            'backgroundColor':'rgba(255, 255, 255, 0.1)',
            'display':'inline-block','padding':'.7rem','minWidth':'120px','borderRadius':'5px','margin':'.4rem .2rem'
           }}>
            <Box css={{'display':'flex','justifyContent':'space-between'}}>
            <img src={Searchbarsmall.src} alt="" />
            <p>{name}</p>
            </Box>
        </Box>
    )
}

const LandingPageSearchBar = ():React.ReactElement=>{
    const route = useRouter()
    const dispatch = useAppDispatch()
    const search_suggestion = ['Part-Time','Work from Home','Logistics','Driver','Sales','IT','Engineering',]
    const isTab = useMediaQuery({
        query: '(min-width: 500px)'
      })
    const [job_title,setJobTitle] = useState<string>();
    const [job_type,setJobType] = useState<string>();

    const handleRouteSearch = ()=>{
        if(route.pathname.includes('/searchpage')){

            dispatch(updateAllSearchState({ 'job_title':`${job_title?job_title:''}`,'job_type':`${job_type?job_type:''}` }))
        }else{
            dispatch(updateAllSearchState({'job_title':'',job_type:''}))
            route.push({pathname:'/searchpage',query:{'job_title':job_title,'job_type':job_type}})
        }

    }
    return (
        <Box
            css={{
                'h2':{
                    'fontSize':'1.5rem','fontWeight':'bold',
                    'span':{'color':'$lightBlue'},'padding':'1.4rem 0',
                    "@bp2":{
                        'fontSize':'2rem',
                        'fontWeight':'700'
                    }
                }
            }}
        >

            <h2> <span className="blue">Find the</span> right 
            <span className="blue">{' '}fit.</span></h2>
            <br />
            <LandingPageInputMainContainer>
                <LandingPageInputFieldContainer>
                <LandingPageInputField 
                onChange={(e:any)=>{
                    setJobTitle(e.target.value)
                }}
                placeholder="Search jobs"/>
                </LandingPageInputFieldContainer>

                <LandingPageInputFieldContainer>
                <LandingPageInputField 
                onChange={(e:any)=>{
                    //we modified the data by triming the space and replace it with underscore
                    setJobType(e.target.value.trim().replace(' ','_'))
                }} 
                placeholder={`Enter job type 'remote' 'hybrid' 'on site' `}/>
                </LandingPageInputFieldContainer>

                <Button onClick={(e:any)=>{
                 handleRouteSearch()
                }}>
                    {
                        isTab?'':'Search '
                    }
                    <BsSearch/>
                </Button>
            </LandingPageInputMainContainer>
            <Box css={{'color':'#FFFFFF','display':'flex','alignItems':'center',
                'maxWidth':'400px','margin':'10px auto',
                'span':{
                    'textDecoration':'underline'
                }
            }}>
            <img src={SpeakerSVG.src} />
            <small><p style={{'padding':'0 .6rem'}}><span onClick={e=>route.push('upload-cv/')}>Upload Your CV</span> - Get noticed by top employers!</p></small>
            </Box>

            {/* <Box css={{'color':'#FFFFFF'}}>
               <p style={{'padding':'.8rem 0'}}> <small>Popular Searches</small></p>

                {
                  search_suggestion.map((data,index:number)=>(
                      <SearchSuggestion name={data} key={index}/> 
                  ))  
                }
            </Box> */}
        </Box>
    )
}

export default LandingPageSearchBar