import React from 'react'
import Box from '../../Box/Box'
import SelectComponent from '../../Select/Select'

 const IntroInterview = () => {
  return (
    <Box css={{
        'textAlign':'center',
        'h2':{
            'padding':'1rem 0','textAlign':'center'
        },
        
    }}>
            <br />
        <br />
        <h2>Set Up Interview</h2>
        <p>
        Select the Job posting that you’re tryig to set up an interview for:
        </p>    
        <br />
        <br />

        <SelectComponent
          showLabel={false}
        
        label='Select Job Posting'
        
        options={[
          {
            'name':'Business Development',
            'value':'Lagos'
          },
          {
            'name':'Job Serive',
            'value':'Abuja'
          },
          {
            'name':'Db Stuff',
            'value':'Benin'
          },
        ]}
        />
    </Box>
  )
}


export default IntroInterview