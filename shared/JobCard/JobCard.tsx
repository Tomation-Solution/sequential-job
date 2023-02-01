import React from 'react'
import {BsHeart} from 'react-icons/bs'
import {BsHeartFill} from 'react-icons/bs'
import Box from '../Box/Box'
import { JobCardContainer } from './JobCard.style'
import {FaMoneyBillWave} from 'react-icons/fa'
import {IoBagSharp,IoSend} from 'react-icons/io5'
import {FaUserAlt} from 'react-icons/fa'
import { JobType } from '../../service/api/job.api'
import { getUser } from '../../utils/extra_function'

type Prop ={
  job:JobType
}
 const JobCard = ({job}:Prop):React.ReactElement => {
  return (
    <JobCardContainer>
        <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center'}}>
            <h2>
              {job.job_title}
            </h2>
            <BsHeartFill/>
        </Box>
        <h3><strong>{job.org_name}</strong></h3>
        <p>{job.country},{job.location}</p>
      <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','width':'270px','margin':'.7rem 0'}}>
      <span>
        <IoBagSharp />
        {' '}
            {job.job_type.replace('_',' ').toUpperCase()}
        </span>
        <span>
           <FaMoneyBillWave/>{' '}${job.salary}/year
        </span>
      </Box>
        <p><IoSend/>{' '} Apply from your phone</p>
        <p><IoSend/>{' '} Hiring Multiple candidates</p>
    </JobCardContainer>
  )
}


export default JobCard