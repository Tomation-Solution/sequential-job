import React from 'react'
import { WhiteInputStyled } from './WhiteInput.style'





type Prop = {
  regsiter?:any;
  error?:string
}
export const WhiteInput = ({regsiter,error=''}:Prop) => {
  return (
    <>
    <WhiteInputStyled placeholder='/100'  {...regsiter}/>
    <p style={{'color':'crimson'}}>{error}</p>
    </>
  )
}


export default WhiteInput