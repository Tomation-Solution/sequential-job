import React from 'react'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import ListOfScheduledCandidate from '../../shared/ListOfScheduledCandidate/ListOfScheduledCandidate'
import TabsComp from '../../shared/Tabs/Tabs'







const Candidates = () => {
  return (
    <LiveJobWithOtherContentLayout header=''>
            <TabsComp 
                data={[
                    {
                        'key':'Candidates',
                        'label':'Candidates',
                        'template':<ListOfScheduledCandidate/>
                    },
                    {
                        'key':'Aggregate',
                        'label':'Aggregate',
                        'template':<></>
                    },
                ]}
            />
    </LiveJobWithOtherContentLayout>
  )
}

export default Candidates