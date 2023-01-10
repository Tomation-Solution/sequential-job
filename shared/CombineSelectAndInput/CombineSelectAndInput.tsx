import React from 'react'
import Box from '../Box/Box'
import InputWithLabel from '../InputWithLabel/InputWithLabel'
import SelectComponent from '../Select/Select'
import type * as Stiches from '@stitches/react'



type Prop ={
    css?:Stiches.CSS
    select_setValue:any;
    select_options:{name:string,value:string}[]
    select_name:string;
    inputRegister:any;
    inputLabel:string
}

const CombineSelectAndInput = ({css,select_name,select_setValue,inputRegister,select_options,inputLabel}:Prop):React.ReactElement => {
  return (
    <Box
    css={{'display':'flex','alignItems':'center', 'border':'1px solid $white','borderRadius':'5px','overflow':'hidden',...css}}
  >
    {/* <label htmlFor="">Salary</label> */}
    <InputWithLabel label={inputLabel} show_label={false} css={{'input':{
        'border':'none'
    }}}
    register={inputRegister}
    />  
    <SelectComponent 
            showLabel={false}
            name={select_name}
            setVaue = {select_setValue}
            control_border={{'border':'none','borderLeft':'1px solid $white','borderRadius':'0'}}
            label='Currency'
            options={select_options}
          />
  </Box>
  )
}


export default CombineSelectAndInput