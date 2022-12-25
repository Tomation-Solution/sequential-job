



import React from 'react'
import {UploadBoxStyledType,UploadBoxContainer} from  './UploadBox.style'
import type * as Stitches from '@stitches/react';



type Prop = React.PropsWithChildren<{
    css?:Stitches.CSS
}>
type UploadBoxType = Prop & UploadBoxStyledType
export const UploadBox = ({children, css}:UploadBoxType) => {
  return (
    <UploadBoxContainer>
        {children}
    </UploadBoxContainer>
  )
}

export default UploadBox