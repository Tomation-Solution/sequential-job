import { NextPage } from 'next'
import React from 'react'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import FilterCandidateContainer from '../../shared/FilterCandidateContainer/FilterCandidateContainer'
import FilterCandidateRow from '../../shared/FilterCandidateRow/FilterCandidateRow'
import TabsComp from '../../shared/Tabs/Tabs'

export const ViewFilterCandidate:NextPage = () => {
  return (
    <LiveJobWithOtherContentLayout
        header='Filtered Candidate'
    >
        <TabsComp
            data={[
                {
                    'key':'Suitable',
                    'label':'Suitable',
                    'template':<FilterCandidateContainer/>
                },
                {
                    'key':'Not Suitable',
                    'label':'NotSuitable',
                    'template':<FilterCandidateContainer/>
                },
                {
                    'key':'Probable',
                    'label':'Probable',
                    'template':<FilterCandidateContainer/>
                },
            ]}
        />
   
    </LiveJobWithOtherContentLayout>
  )
}


export default ViewFilterCandidate