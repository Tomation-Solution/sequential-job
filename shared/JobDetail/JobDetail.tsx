import Box from "../Box/Box"
import {AiOutlineHeart} from 'react-icons/ai'
import {ImDownload2} from 'react-icons/im'
import Button from "../Button/Button"
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

const JobDetail = ():React.ReactElement=>{
    const data:string= JSON.parse( "\"# Go to console to see stuff logged\\n <br/><br/> \\nNice Stuf\\n\\n\\n\\t\\t\\t\\t* This is something am waiting for\\n\\t\\t\\t\\t* dffergtrgght\\n\\t\\t\\t\\t* hytiuu7o89ploil\\n\\t\\t\\t\\t* fgrfdgr\"")
    return (
        <Box css={{'color':'$white','padding':'0 .5rem','@bp2':{
            'textAlign':'center','maxWidth':'400px','margin':'0 auto'
        }}}>
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
                <h2 >Business Developer</h2>
                
                <Box>
                    <AiOutlineHeart/>
                    <ImDownload2/>
                </Box>
            </Box>
            <p><small>VI, Lagos</small></p>

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
                    
                    <p>{': '} $97,000/yr</p>
                </Box>
                <br />
                <Box className="job_details">
                    <p>JobType</p>
                    <p>{': '}Remote</p>
                </Box>

            </Box>
            <br />
            <br />

            <h2 style={{'color':'#24CDE2','padding':'1rem 0','fontWeight':'lighter'}}>Job Description</h2>
            <br /><br />
            <Box css={{'textAlign':'left'}}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {data}
            </ReactMarkdown>
            </Box>
            <br /><br />
            <br /><br />

            <Button css={{'margin':'0 auto'}}>Add filter job</Button>
            <br /><br />
        </Box>
    )
}
export default JobDetail