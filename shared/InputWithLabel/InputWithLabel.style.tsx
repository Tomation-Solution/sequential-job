import { StitchesLogoIcon } from "@radix-ui/react-icons";
import { styled } from "../../stitches.config";
import type * as Stitches from '@stitches/react';





export const InputWithLabelContainerStyle = styled('div',{
'display':'flex',
'flexDirection':'column',

    'input,textarea':{
        border:'1px solid $white',
        'backgroundColor':'$thickBlue',
        'outline':'none',
        'padding':'.5rem 1rem',
        'borderRadius':'10px',
        color:'$white'
    },
    'label':{
        padding:'.6rem 0',
        color:'$white'
    }
})




export type InputWithLabelStyleType = Stitches.VariantProps<typeof InputWithLabelContainerStyle>