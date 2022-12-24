import React from 'react'
import { StyledButton,StyledButtonVariants } from './Button.style'
import type * as Stitches from '@stitches/react';



type Props = React.PropsWithChildren<{
    css?: Stitches.CSS
}>

type ButtonType = Props & StyledButtonVariants
const Button = ({children,color,...props}:ButtonType):React.ReactElement => {
  return (
    <StyledButton
    color={color} 
    {...props}
    >
        {children}
    </StyledButton>
  )
}



export default Button