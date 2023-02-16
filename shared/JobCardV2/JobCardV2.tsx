




// this job card is mainly used in the main site

import Box from "../Box/Box"
import { CompanyLogo, JobCardV2Container } from "./JobCardV2.style"
import {BsHeart} from 'react-icons/bs'
import Button from "../Button/Button"
type Prop ={
    title:string
}
const JobCardV2 = ({title}:Prop):React.ReactElement=>{

    return (
        <JobCardV2Container>
            <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between'}}>
                <CompanyLogo >
                    <h2>C</h2>
                </CompanyLogo>
                <BsHeart style={{'color':'black'}}/>
            </Box>
            <br/>
            <h2 style={{'color':'#14717C',}}>{title}</h2>
            <p style={{'color':'#24CDE2','padding':'.5rem 0'}}><small>Salt</small></p>
            <p className="black">America</p>
            <p className="black" style={{'padding':'.5rem 0'}}>$45000 - $50000 / Per Year</p>

            <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between','padding':'10px 0'}}>
                <p className="black"><span>2 days ago</span></p>

                <Button css={{'backgroundColor':'#24CDE2','padding':'.5 1rem','borderRadius':'5px'}}>Apply</Button>
            </Box>
        </JobCardV2Container>
    )
}
export default JobCardV2