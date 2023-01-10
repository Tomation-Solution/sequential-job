import React from 'react'
import { StyledButton,StyledButtonVariants } from './Button.style'
import type * as Stitches from '@stitches/react';



type Props = React.PropsWithChildren<{
    css?: Stitches.CSS
    onClick?:(e:any)=>void
}>

type ButtonType = Props & StyledButtonVariants
const Button = ({children,color,onClick=()=>null,...props}:ButtonType):React.ReactElement => {
  return (
    <StyledButton
    onClick={onClick}
    color={color} 
    {...props}
    >
        {children}
    </StyledButton>
  )
}



export default Button