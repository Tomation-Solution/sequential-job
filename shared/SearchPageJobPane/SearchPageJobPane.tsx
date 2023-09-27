import Box from "../Box/Box"
import Button from "../Button/Button"
import Pane from "../Pane"
import AboutImg  from  "../../asset/aboutPage.png"
import { JobType } from "../../service/api/job.api"



const SearchPageJobPane =(job:JobType)=>{

    return (
        <Pane css={{'padding':'1rem','borderRadius':'10px','@bp4':{
            'padding':'1.4rem'
        }}}>
            {/* header */}
            <Box css={{
                'img':{
                    'display':'block',
                    'width':'90px',
                    'height':'70px',
                    'objectFit':'cover'
                },
                gap:'5px',
                'display':'flex',
                'flexDirection':'column',
                '@bp2':{
                'flexDirection':'row',
                'alignItems':'center',
                'h2':{
                    'fontSize':'2rem'
                }
                }
            }}>
                <img src={AboutImg.src} alt="" />
                <Box >
                    <h2
                    style={{'color':'black'}}
                    >{job.job_title}</h2>
                    <p
                    style={{
                'color':'#404040'
                    }}
                    >{job.org_name}</p>
                </Box>
            </Box>



            <Box as='p' css={{'padding':'.4rem 0','color':'#777777','@bp2':{
                'padding':'1rem 0'
            }}}><small><strong>Posted 3 Days Ago</strong></small></Box>

<p  className='job-details' 
style={{'color':'#797979','fontWeight':'bold'}}
dangerouslySetInnerHTML={{__html: `${job?.description_content?.slice(0,305).replaceAll('"',' ')  }`.replaceAll('\\',' ')}}/>..

            {/* <p style={{'color':'#797979','fontWeight':'bold'}}>
              {job.description_content.slice(0,305)} 
                <small style={{'color':'#c3c3c3'}}>
                {job.description_content.slice(305,405)} 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam amet facilis magni optio?
                </small>
            </p> */}
                    <br />
            <Box>
                <Button css={{'borderRadius':'4px','marginLeft':'auto'}}
                onClick={e=>{
        window.open('https://app.sequentialjobs.com/','_blank')

                }}
                >Apply Now</Button>
            </Box>
        </Pane>
    )
}

export default SearchPageJobPane