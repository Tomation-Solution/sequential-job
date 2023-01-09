import React from 'react'
import { styled } from '../stitches.config'

const PaneStyle = styled('div',{
    backgroundColor:'$white',
    padding:'1rem',
    'borderRadius':'10px'
})
type Prop = React.PropsWithChildren<{}>
const Pane = ({children}:Prop) => {
  return (
    <PaneStyle>
        {children}
    </PaneStyle>
  )
}

export default Pane