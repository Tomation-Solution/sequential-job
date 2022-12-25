import React from 'react'
import GeneralLayout from '../../layout/GeneralLayout/GeneralLayout'
import InputWithLabel from '../../shared/InputWithLabel/InputWithLabel'
import SelectComponent from '../../shared/Select/Select'




const AddJobs = () => {
  return (
    <GeneralLayout>
      <InputWithLabel label='Job Title'/>

      <SelectComponent 
        label='Location'
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
    </GeneralLayout>
  )
}


export default AddJobs