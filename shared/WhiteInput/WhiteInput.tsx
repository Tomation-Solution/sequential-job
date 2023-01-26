import React from 'react'
import { WhiteInputStyled } from './WhiteInput.style'

import type * as Stitches from '@stitches/react';
import Box from '../Box/Box';




type Prop = {
  regsiter?:any;
  error?:string;
  css?: Stitches.CSS;
  intputCss?: Stitches.CSS;
  placeHolder?:string
}
export const WhiteInput = ({regsiter,error='',placeHolder='' ,css,intputCss}:Prop) => {
  return (
    <Box css={css}>
    <WhiteInputStyled css={intputCss} placeholder={placeHolder}  {...regsiter}/>
    <p style={{'color':'crimson'}}>{error}</p>
    </Box>
  )
}


export default WhiteInput