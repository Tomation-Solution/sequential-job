import React from 'react'
import { InputWithLabelStyleType,InputWithLabelContainerStyle } from './InputWithLabel.style'
import type * as Stitches from '@stitches/react';



type Props = {
    label:string;
    type?:'text'|'password'|'date'|'time',
    show_label?:boolean;
    css?:Stitches.CSS
    register?:any;
    errors?:string|null
    disabled?:boolean,
    value?:string,
}
type InputWithLabelType = Props &InputWithLabelStyleType

const InputWithLabel = ({errors,label,type='text',show_label=true,css,register,...rest}:InputWithLabelType) => {
  return (
    <InputWithLabelContainerStyle css={css}>
    {show_label?
        <label htmlFor={label}>{label}</label>
      :''
      }
        <input type={type} {...register}  {...rest} />
        {
          errors?
          <p style={{'color':'crimson'}}>{errors}</p>
        :''
        }
    </InputWithLabelContainerStyle>
  )
}


export default InputWithLabel