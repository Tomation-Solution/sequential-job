import React from 'react'
import { WhiteInputStyled } from './WhiteInput.style'

import type * as Stitches from '@stitches/react';
import Box from '../Box/Box';




type Prop = {
  regsiter?:any;
  error?:string;
  css?: Stitches.CSS;
  placeHolder?:string
}
export const WhiteInput = ({regsiter,error='',placeHolder='/100' ,css}:Prop) => {
  return (
    <Box css={css}>
    <WhiteInputStyled placeholder={placeHolder}  {...regsiter}/>
    <p style={{'color':'crimson'}}>{error}</p>
    </Box>
  )
}


export default WhiteInput