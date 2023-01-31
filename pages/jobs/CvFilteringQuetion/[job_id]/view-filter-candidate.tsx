import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import useToast from '../../../../hooks/useToastify'
import GeneralLayout from '../../../../layout/GeneralLayout/GeneralLayout'
import LiveJobWithOtherContentLayout from '../../../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import { getSortedJobCandidate, get_sorted_job_candidate } from '../../../../service/api/candidate_related.api'
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
    const { isLoading,data,mutate} = useMutation(get_sorted_job_candidate,{
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
    <GeneralLayout
        
    >
        <h1 style={{'textAlign':'center'}}>Filtered Candidate</h1>
        <Preloader loading={isLoading}/>
        <Box css={{
            '@bp2':{
                'maxWidth':'900px',
                'margin':'0 auto'
            }
        }}>
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
        </Box>
   
    </GeneralLayout>
  )
}


export default ViewFilterCandidate