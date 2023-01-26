import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import useToast from '../../../../hooks/useToastify'
import LiveJobWithOtherContentLayout from '../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import { getSortedJobCandidate, get_sorted_job_candidate, get_sorted_job_candidate_for_test } from '../../../../service/api/candidate_related.api'
import Box from '../../../../shared/Box/Box'
import Button from '../../../../shared/Button/Button'
import FilterCandidateContainer from '../../../../shared/FilterCandidateContainer/FilterCandidateContainer'
import FilterCandidateRow from '../../../../shared/FilterCandidateRow/FilterCandidateRow'
import Preloader from '../../../../shared/Preloader/Preloder'
import TabsComp from '../../../../shared/Tabs/Tabs'

export const ViewFilterCandidate:NextPage = () => {
    const route = useRouter();
    const {notify} = useToast()
    const { job_id } = route.query
    const [filtering_state,setFiltering_state] = useState<getSortedJobCandidate['status']>('suitable')
    const { isLoading,data,mutate} = useMutation(get_sorted_job_candidate_for_test,{
        'onSuccess':(data)=>{
            console.log({'successData':data})
        },
        'onError':(err)=>{
            console.log({err})
        }
    })
    useEffect(()=>{
        if(typeof job_id == 'string'){
            mutate({
                'status':filtering_state,'job_id':parseInt(job_id)
            })
        } 
    },[filtering_state])

  return (
    <LiveJobWithOtherContentLayout
        header='Filtered Candidate For Test Result'
    >
        <Preloader loading={isLoading}/>
        <TabsComp
        onChange={(value)=>{
            console.log({value})
            if(value==='Suitable'){
                setFiltering_state('suitable')
            }
            if(value==='Not Suitable'){
                setFiltering_state('not_suitable')

            }
            if(value==='Probable'){
                setFiltering_state('partially_suitable')
            }
        }}
            data={[
                {
                    'key':'Suitable',
                    'label':'Suitable',
                    'template':data?<FilterCandidateContainer applicants={data}/>:<></>
                },
                {
                    'key':'Not Suitable',
                    'label':'NotSuitable',
                    'template':data?<FilterCandidateContainer applicants={data}/>:<></>
                },
                {
                    'key':'Probable',
                    'label':'Probable',
                    'template':data?<FilterCandidateContainer applicants={data}/>:<></>
                },
            ]}
        />
   
    </LiveJobWithOtherContentLayout>
  )
}


export default ViewFilterCandidate