import Box from "../Box/Box"
import {AiOutlineHeart} from 'react-icons/ai'
import {ImDownload2} from 'react-icons/im'
import Button from "../Button/Button"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import { JobType, switchJobOnApi } from "../../service/api/job.api"
import { useRouter } from "next/router"
import useToast from "../../hooks/useToastify"
import { getUser } from "../../utils/extra_function"
import { useMutation } from "react-query"
import { applyForJobs } from "../../service/api/jobJobSeeker.api"
import Preloader from "../Preloader/Preloder"
import Switch from "../Switch/Switch"
import EditorVersion2 from "../EditorVersion2/EditorVersion2"
/* @ts-ignore */
import Editor from 'react-medium-editor';

type Prop = {
    currentJob:JobType;
}
const JobDetailV2 = ({currentJob}:Prop):React.ReactElement=>{
    const {notify} = useToast()
    const loggedInUser = getUser()
  const user=getUser()

    // const data:string= currentJob.description_content?JSON.parse( currentJob.description_content):''
    const data:string= currentJob.description_content?currentJob.description_content:''
    const { mutate:jobSwitch , isLoading} = useMutation(switchJobOnApi,{
        onSuccess:(data)=>{
            // console.log({'switchWasASuccess':data})
            notify('Updated Successfully','success')
        }
    })
    const route = useRouter()

    const { mutate,isLoading:applying} = useMutation(applyForJobs,{
        'onSuccess':(data)=>{
            notify('Application Success','success')
            notify('Please hold on while we load job quetions','success')
            route.push(`/job_seeker/cvfiltertest/${currentJob.id}/`)
        },
        'onError':(error:any)=>{
            notify('You have already applied','error')
        }
    })

    const handleJobSubbmission = ()=>{
        notify('You Need to login to apply','success')
        window.open('https://app.sequentialjobs.com/','_blank')

    }
    return (
        <Box css={{'color':'black','padding':'0 .5rem', 'backgroundColor':'white','@bp2':{
            'textAlign':'center','maxWidth':'600px','margin':'0 auto',

           
        }}}>
            <Preloader loading={applying||isLoading}/>
            <p style={{'fontWeight':'lighter',}}><small>{currentJob.org_name}</small></p>

            <Box css={{'padding':'.5rem 0','display':'flex','alignItems':'center','justifyContent':'space-between',
                    '& h2':{
                        'width':'90%',
                    },
                    '& div':{
                        'width':'20%',
                        // 'border':'1px solid red',
                        maxWidth:'50px',
                        'display':'flex','justifyContent':'space-between'
                    },
                    
                }}>
                <h2 style={{'color':'black'}} >{currentJob.job_title}</h2>
                
                <Box>
                    <AiOutlineHeart/>
                    <ImDownload2/>
                </Box>
            </Box>
            <p><small>{currentJob.location}</small></p>

            <h3 style={{'color':'#24CDE2','padding':'1rem 0','fontWeight':'lighter'}}>Job details</h3>
            <Box
                css={{
                    '@bp2':{
                        'display':'flex','justifyContent':'space-between','alignItems':'center','width':'300px','margin':'0 auto',
                        '.job_details':{
                            'display':'flex',
                        }
                    }
                }}
            >

                <Box className="job_details" css={{'color':'black'}}>
                    <p>Salary</p>
                    
                    <p>{': '} {currentJob.currency}{currentJob.salary}/yr</p>
                </Box>
                <br />
                <Box className="job_details" css={{'color':'black'}}>
                    <p>JobType</p>
                    <p>{': '}{currentJob.job_type.replaceAll('_',' ')}</p>
                </Box>

            </Box>
            <br />
               
            

            <h2 style={{'color':'#24CDE2','padding':'1rem 0','fontWeight':'lighter'}}>Job Description</h2>
            <br /><br />
            <Box css={{'textAlign':'left','overflow':'scroll','padding':'0 1rem','color':'black'}}>
            <Editor
          text={data.replaceAll('"',' ')}
          options={{
            'disableEditing':true
          }}
        />
            </Box>
            <br /><br />
          
                <Box>
                    <Button color={'lightBlueBtn'} 
                    onClick={handleJobSubbmission}
                    css={{'margin':'0 auto','width':'200px'}}
                    
                    >Apply</Button>
                </Box>
            <br /><br />
              



            <br /><br />
            <br /><br />
        </Box>
    )
}
export default JobDetailV2