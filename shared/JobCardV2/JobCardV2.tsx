




// this job card is mainly used in the main site

import Box from "../Box/Box"
import { CompanyLogo, JobCardV2Container } from "./JobCardV2.style"
import {BsHeart} from 'react-icons/bs'
import Button from "../Button/Button"
import { JobType } from "../../service/api/job.api"
type Prop ={
    title:string,
    job:JobType
}
const JobCardV2 = ({title,job}:Prop):React.ReactElement=>{

    return (
        <JobCardV2Container>
            <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
                <CompanyLogo >
                    <h2>{job.org_name[0]}</h2>
                </CompanyLogo>
                <BsHeart style={{'color':'black'}}/>
            </Box>
            <br/>
            <h2 style={{'color':'#14717C',}}>{title}</h2>
            <p style={{'color':'#24CDE2','padding':'.5rem 0'}}><small>{job.org_name}</small></p>
            <p className="black">{job.location} , {job.country}</p>
            <p className="black" style={{'padding':'.5rem 0'}}>{job.currency}{job.salary}</p>

            <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between','padding':'10px 0'}}>
                <p className="black"><span>..</span></p>

                <Button css={{'backgroundColor':'#24CDE2','padding':'.5 1rem','borderRadius':'5px'}}>Apply</Button>
            </Box>
        </JobCardV2Container>
    )
}
export default JobCardV2