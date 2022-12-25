import React from 'react'
import { InputWithLabelStyleType,InputWithLabelContainerStyle } from './InputWithLabel.style'




type Props = {
    label:string;
    type?:'text'|'password'
}
type InputWithLabelType = Props &InputWithLabelStyleType

const InputWithLabel = ({label,type='text',...rest}:InputWithLabelType) => {
  return (
    <InputWithLabelContainerStyle>
        <label htmlFor={label}>{label}</label>
        <input type={type} {...rest} />
    </InputWithLabelContainerStyle>
  )
}


export default InputWithLabel