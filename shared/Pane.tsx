import React from 'react'
import { styled } from '../stitches.config'
import type * as Stitches from '@stitches/react';

const PaneStyle = styled('div',{
    backgroundColor:'white',
    padding:'1rem',
    'borderRadius':'10px',
    'boxShadow':'rgba(149, 157, 165, 0.2) 0px 8px 24px',

})
type Prop = React.PropsWithChildren<{
  css?: Stitches.CSS

}>
const Pane = ({children,css={}}:Prop) => {
  return (
    <PaneStyle css={css}>
        {children}
    </PaneStyle>
  )
}

export default Pane