import Box from "../Box/Box"
import {AiOutlineHeart} from 'react-icons/ai'
import {ImDownload2} from 'react-icons/im'
import Button from "../Button/Button"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { JobType } from "../../service/api/job.api"
import { useRouter } from "next/router"
import useToast from "../../hooks/useToastify"
import { getUser } from "../../utils/extra_function"
import { useMutation } from "react-query"
import { applyForJobs } from "../../service/api/jobJobSeeker.api"
import Preloader from "../Preloader/Preloder"

type Prop = {
    currentJob:JobType;
}
const JobDetail = ({currentJob}:Prop):React.ReactElement=>{
    const {notify} = useToast()
    const loggedInUser = getUser()
    const data:string= JSON.parse( currentJob.description_content)
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
        mutate(currentJob.id)
    }
    return (
        <Box css={{'color':'$white','padding':'0 .5rem','@bp2':{
            'textAlign':'center','maxWidth':'600px','margin':'0 auto'
        }}}>
            <Preloader loading={applying}/>
            <p style={{'fontWeight':'lighter',}}><small>ABC Company Ltd</small></p>

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
                <h2 >{currentJob.job_title}</h2>
                
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

                <Box className="job_details">
                    <p>Salary</p>
                    
                    <p>{': '} ${currentJob.salary}/yr</p>
                </Box>
                <br />
                <Box className="job_details">
                    <p>JobType</p>
                    <p>{': '}{currentJob.job_type}</p>
                </Box>

            </Box>
            <br />
                {
                    loggedInUser?.user_type=='company'?
            <p style={{'color':'crimson','cursor':'pointer'}} onClick={(e)=>{
                if(currentJob.job_variant =='filter_only'){
                    if(currentJob.job_filter == null){
                        notify('Please Set CvFilter For this job first','error')
                        return null
                    }
                }
                if(currentJob.job_variant == 'filter_and_test'){
                    if((currentJob.job_filter == null) || currentJob.job_test == null){
                        notify('Please Set CvFilter and Test for this job first','error')
                        return 
                    }
                 }
                route.push(`/jobs/CvFilteringQuetion/${currentJob.id}/interview/viewInterView`)
            }}>
                view Interview
            </p>:''
                }
            <br />

            <h2 style={{'color':'#24CDE2','padding':'1rem 0','fontWeight':'lighter'}}>Job Description</h2>
            <br /><br />
            <Box css={{'textAlign':'left','overflow':'scroll','padding':'0 1rem'}}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {data}
            </ReactMarkdown>
            </Box>
            <br /><br />
            {
                loggedInUser?.user_type=='job_seakers'?
                <Box>
                    <Button color={'lightBlueBtn'} 
                    onClick={handleJobSubbmission}
                    css={{'margin':'0 auto','width':'200px'}}>Apply</Button>
                </Box>
                :
                ''
            }
            <br /><br />
                {
            loggedInUser?.user_type=='company'?
            <Box>
                {
                currentJob.job_filter?
<Box css={{
    'display':'flex','justifyContent':'space-between','width':'400px','margin':'0 auto'
}}>

<Button   css={{'margin':'0 auto'}} color={'lightBlueOutline'} 
                onClick={(e)=>route.push(`/jobs/CvFilteringQuetion/application-sorting-create/${currentJob.job_filter}/`)}
                >Update Cut Off Mark</Button>
                <Button color={'whiteBtn'}
                   onClick={(e)=>route.push(`/jobs/CvFilteringQuetion/${currentJob.id}/view-filter-candidate/`)}
                > 
                    View Sorted Candidate
                </Button>
</Box> 
                :
                <Button  onClick={(e)=>route.push(`/jobs/CvFilteringQuetion/${currentJob.id}/`)}>Add Cv Filtering</Button>
            }
<br />
            {
                (currentJob.job_variant==='filter_and_test'&&currentJob.job_test==null)?
                <Button 
                onClick={(e)=>route.push(`/jobs/JobTest/${currentJob.id}/`)}
                color={'lightBlueOutline'}
                >
                    Add Test
                </Button>:''
            }
<br />
            <Button css={{'margin':'0 auto'}}  onClick={(e)=>route.push(`/job/${currentJob.id}/`)}>Job Dashboard</Button>
                </Box>:''
                }



            <br /><br />
            <br /><br />
        </Box>
    )
}
export default JobDetail