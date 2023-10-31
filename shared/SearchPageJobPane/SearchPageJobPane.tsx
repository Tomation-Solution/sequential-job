import Box from "../Box/Box"
import Button from "../Button/Button"
import Pane from "../Pane"
import AboutImg  from  "../../asset/aboutPage.png"
import { JobType } from "../../service/api/job.api"
import { useState } from "react"



const SearchPageJobPane =(job:JobType)=>{
    const [show,setShow]= useState(false)

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
            }}}>
                <small><strong>
                    {/* Posted 3 Days Ago */}
                    </strong></small>
                </Box>

<Box>
{
    !show?
<p  className='job-details' 
style={{'color':'#797979','fontWeight':'bold'}}
dangerouslySetInnerHTML={{__html: `${job?.description_content?.slice(0,505).replaceAll('"',' ')  }....`.replaceAll('\\',' ')}}/>
:''}

{
    show?
<Box >
<p  className='job-details' 
style={{'color':'#797979',}}
dangerouslySetInnerHTML={{__html: `${job?.description_content?.replaceAll('"',' ')  }`.replaceAll('\\',' ')}}/>
<br />
<p
style={{'color':'#797979',}}
>Location: <small><strong>{job.location}</strong></small></p>
                    <br />
                    <br />

<div  className='job-details' 
style={{'color':'#797979',}}
>
    <h2> Salary and Compensation</h2>
    <br />
    <Box className="job_details" style={{ color: "black" }} css={{'display':'flex','alignItems':'center',gap:'10px','flexWrap':'wrap'}}>
         {/* @ts-ignore */}
          <p>Salary: <small><strong>{job?.money_sign}{job?.salary}</strong></small></p>

          <p>JobType: <small><strong>{job?.job_type.replaceAll('_',' ')}</strong></small></p>

    </Box>

</div>
</Box>
:''}
</Box>
<br />
                    
            <Box css={{'display':'flex','flexWrap':'wrap','gap':'2px','maxWidth':'300px','marginLeft':'auto'}}>
                <Button
                color='lightBlueOutline'
                css={{'borderRadius':'4px','marginLeft':'auto'}}
                onClick={e=>{
                    setShow(!show)
                }}
                >{!show?'View More':'Show Less'}</Button>

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