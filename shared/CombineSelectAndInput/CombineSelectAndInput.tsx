import React from 'react'
import Box from '../Box/Box'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import SelectComponent from '../Select/Select'
import type * as Stiches from '@stitches/react'



type Prop ={
    css?:Stiches.CSS
}

const CombineSelectAndInput = ({css}:Prop):React.ReactElement => {
  return (
    <Box
    css={{'display':'flex','alignItems':'center', 'border':'1px solid $white','borderRadius':'5px','overflow':'hidden',...css}}
  >
    {/* <label htmlFor="">Salary</label> */}
    <InputWithLabel label='Salary' show_label={false} css={{'input':{
        'border':'none'
    }}}/>  
    <SelectComponent 
            showLabel={false}
            control_border={{'border':'none','borderLeft':'1px solid $white','borderRadius':'0'}}
            label='Currency'
            options={[
              {
                'name':'Naira',
                'value':'Naira',
              },
              {
                'name':'Dollar',
                'value':'dollar',
              }
            ]}
          />
  </Box>
  )
}


export default CombineSelectAndInput