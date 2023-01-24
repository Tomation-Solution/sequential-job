import React, { useState } from 'react'
import { UserType } from '../../service/api/authentication/authentication.api'
import { getSortedJobCandidateResponse } from '../../service/api/candidate_related.api'
import Box from '../Box/Box'
import Button from '../Button/Button'
import FilterCandidateRow from '../FilterCandidateRow/FilterCandidateRow'
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import jwt_decode from "jwt-decode";
import useToast from '../../hooks/useToastify'
import { useMutation } from 'react-query'
import { InviteCandidatesApi } from '../../service/api/interview.api'
import Preloader from '../Preloader/Preloder'



type Prop ={
  applicants:getSortedJobCandidateResponse[]
}
const btnStyle ={'width':'45%','borderRadius':'999px','paddingTop':'.5rem','paddingBottom':'.5rem'}
const FilterCandidateContainer = ({applicants}:Prop) => {
  const {notify} = useToast()
  
  const {mutate,isLoading} = useMutation(InviteCandidatesApi,{
    onSuccess:(data)=>{
      if(data.status===200){
        notify('Sent!','success')
      }else{
        notify('Not Sent Please check your internet','error')
      }
    },
    'onError':(err)=>{
      console.log({'server Error':err})
    }
  })
  const [list_of_ids ,setListOfId] = useState<number[]>([])
  
  const logged_in_user:UserType = jwt_decode(JSON.parse( cookieCutter.get('user')).access)
  const InviteAll = ()=>{
    mutate(applicants.map((data,index)=>data.id))
  }
  const inviteChecked = ()=>{
    if(list_of_ids.length ==0){
      notify('Select at least on candidate','error')
      return
    } 

    mutate(list_of_ids)
  }
  return (
<Box css={{
                        'color':'$white',
                        '@bp2':{
                     'maxWidth':'800px'
                    }}}>
                      <Preloader  loading={isLoading}/>

                      {applicants.map((applicant,index)=>(
                          <FilterCandidateRow 
                          list_of_ids={list_of_ids}
                          setListOfId={setListOfId}
                          applicant={applicant} key={index}/>
                      ))}

                      <br />
                      <br />
                      {
                        logged_in_user.user_type=='panelist'?'':
                      <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between',}}>
                        <Button css={btnStyle} 
                        onClick={InviteAll}
                        >
                        Invite all
                        </Button>

                        <Button 
                        onClick={inviteChecked}
                        color={'lightBlueOutline'} css={btnStyle}>
                        Invite all checked
                        </Button>
                      </Box>
                      }
                    </Box>
  )
}


export default FilterCandidateContainer