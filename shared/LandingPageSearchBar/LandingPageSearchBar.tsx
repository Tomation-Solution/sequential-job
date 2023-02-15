import Box from "../Box/Box"
import Button from "../Button/Button"
import { LandingPageInputField, LandingPageInputFieldContainer, LandingPageInputMainContainer } from "./LandingPageSearchBar.style"
import {BsSearch} from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'
import SpeakerSVG from '../../asset/speaker.svg'
import Searchbarsmall from '../../asset/searchbarsmall.svg'


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
    const search_suggestion = ['Part-Time','Work from Home','Logistics','Driver','Sales','IT','Engineering',]
    const isTab = useMediaQuery({
        query: '(min-width: 500px)'
      })
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
                <LandingPageInputField placeholder="Search jobs, keywords, companies"/>
                </LandingPageInputFieldContainer>

                <LandingPageInputFieldContainer>
                <LandingPageInputField placeholder="Enter location or “remote”"/>
                </LandingPageInputFieldContainer>

                <Button>
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
            <small><p style={{'padding':'0 .6rem'}}><span>Upload Your CV</span> - Get noticed by top employers!</p></small>
            </Box>

            <Box css={{'color':'#FFFFFF'}}>
               <p style={{'padding':'.8rem 0'}}> <small>Popular Searches</small></p>

                {
                  search_suggestion.map((data,index:number)=>(
                      <SearchSuggestion name={data} key={index}/> 
                  ))  
                }
            </Box>
        </Box>
    )
}

export default LandingPageSearchBar