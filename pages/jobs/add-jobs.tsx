import React from 'react'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import LiveJobWithOtherContentLayout from '../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout'
import Box from '../../shared/Box/Box'
import Button from '../../shared/Button/Button'
import CombineSelectAndInput from '../../shared/CombineSelectAndInput/CombineSelectAndInput'
import InputWithLabel from '../../shared/InputWithLabel/InputWithLabel'
import SelectComponent from '../../shared/Select/Select'




const AddJobs = () => {
  return (
    <LiveJobWithOtherContentLayout
    header='Create Job'
    >

    <form action="">
        <InputWithLabel label='Job Title'/>
    <br />
        <SelectComponent 
          showLabel={true}
          label='Location '
          options={[
            {
              'name':'Lagos',
              'value':'Lagos'
            },
            {
              'name':'Abuja',
              'value':'Abuja'
            },
            {
              'name':'Benin',
              'value':'Benin'
            },
          ]}
        />

<br />
        <SelectComponent 
          showLabel={true}
          label='Job Type'
          options={[
            {
              'name':'On Site',
              'value':'on_site'
            },
            {
              'name':'Remote',
              'value':'remote'
            },
          ]}
        />


<br />
        <SelectComponent 
          showLabel={true}
          label='Employment Type '
          options={[
      
          ]}
        />

<br />
          <label htmlFor="">Salary</label>
          <CombineSelectAndInput/>
          <br />
        <InputWithLabel label='Required Experience'/>

        <br />
        <InputWithLabel label='Generic Skills '/>

        <br />
        <InputWithLabel label='Technical Skills  '/>

    </form>
          <Button color={'lightBlueBtn'} css={{'width':'30%','margin':'15px auto'}}>Next</Button>
    </LiveJobWithOtherContentLayout>
  )
}


export default AddJobs