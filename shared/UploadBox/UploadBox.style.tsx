import { styled } from "../../stitches.config";
import type * as Stitches from '@stitches/react';




export const UploadBoxContainer = styled('div',{
    border:'5px dotted $white',
    borderRadius:'5px',
    minHeight:'100px',
    padding:'1rem',
    display:'flex',
    justifyContent:'center',
    'alignItems':'center'

})



export type UploadBoxStyledType = Stitches.VariantProps<typeof UploadBoxContainer>