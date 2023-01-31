import React, { useState } from 'react'
import { getSortedJobCandidateResponse } from '../../service/api/candidate_related.api'
import Box from '../Box/Box'
import Button from '../Button/Button'

/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import jwt_decode from "jwt-decode";
import { UserType } from '../../service/api/authentication/authentication.api'
import { useRouter } from 'next/router'
import CheckBox from '../Checkbox/Checkbox'


type Prop ={
  applicant:getSortedJobCandidateResponse,
  list_of_ids:number[],
  setListOfId:any
}

const FilterCandidateRow = ({applicant,list_of_ids,setListOfId}:Prop) => {
  const logged_in_user:UserType = jwt_decode(JSON.parse( cookieCutter.get('user')).access)
  const route = useRouter()
  const { job_id } = route.query


  return (
    <Box
        css={{
            
            'display':'grid',
            'gridTemplateColumns':'repeat(2,1fr)',
            'padding':'.7rem','gap':'10px',
            'border':'1px solid $lightBlue','borderRadius':'10px','justifyItems':'center',
            '@bp2':{
                'display':'flex','alignItems':'center','justifyContent':'space-between',
                'border':'none'
            },
        }}
    >
        <CheckBox onCheck={(checked)=>{
          console.log({'checked':checked,'email':applicant.id})
          if(checked){
            // checkCandidate(applicant.id)
            setListOfId( [applicant.id,...list_of_ids,])
          }else{
            // let postion_index = list_of_ids.indexOf(applicant.id)
            setListOfId(list_of_ids.filter((id,index)=>id!==applicant.id)) 
          }
        }}/>
        <p>{applicant.jobseekers.full_name}</p>
        <p>{applicant.jobseekers.email}</p>
        <p>{applicant.filter_quetions_score}</p>
        <Button css={{'padding':'.4rem 1rem','width':'100px'}} onClick={(e)=>{
          window.open(applicant.jobseekers.cv_url, '_blank')
        }}>View Cv</Button>
        {
          logged_in_user.user_type=='panelist'?
          <Button color={'lightBlueOutline'} css={{'padding':'.4rem 1rem','width':'100px'}}
            onClick={(e)=>{
              route.push(`/panelist/grade_candidate/${job_id}/${applicant.id}/`)
            }}
          >Grade</Button>
          :
          // ''
          <Button color={'lightBlueOutline'} css={{'padding':'.4rem 1rem','width':'100px'}}>Aggre</Button>
        }
    </Box>
  )
}


export default FilterCandidateRow