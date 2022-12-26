import React from 'react'
import { InputWithLabelStyleType,InputWithLabelContainerStyle } from './InputWithLabel.style'
import type * as Stitches from '@stitches/react';



type Props = {
    label:string;
    type?:'text'|'password',
    show_label?:boolean;
    css?:Stitches.CSS
}
type InputWithLabelType = Props &InputWithLabelStyleType

const InputWithLabel = ({label,type='text',show_label=true,css,...rest}:InputWithLabelType) => {
  return (
    <InputWithLabelContainerStyle css={css}>
    {show_label?
        <label htmlFor={label}>{label}</label>
      :''
      }
        <input type={type} {...rest} />
    </InputWithLabelContainerStyle>
  )
}


export default InputWithLabel