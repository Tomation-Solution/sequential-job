import React from 'react'
import { InputWithLabelStyleType,InputWithLabelContainerStyle } from '../InputWithLabel/InputWithLabel.style'
import type * as Stitches from '@stitches/react';



type Props = {
    label:string;
    type?:'text'|'password'|'date'|'time',
    show_label?:boolean;
    css?:Stitches.CSS
    register?:any;
    errors?:string|null
}

type InputWithLabelType = Props &InputWithLabelStyleType

const TextAreaWithLabel = ({errors,label,type='text',show_label=true,css,register,...rest}:InputWithLabelType):React.ReactElement=>{

    return (
        <InputWithLabelContainerStyle>
            {show_label?
                    <label htmlFor={label}>{label}</label>
                :''
                }
            <textarea type={type} {...register}  {...rest} />
            {
            errors?
            <p style={{'color':'crimson'}}>{errors}</p>
            :''
            }
        </InputWithLabelContainerStyle>
    )
}

export default  TextAreaWithLabel