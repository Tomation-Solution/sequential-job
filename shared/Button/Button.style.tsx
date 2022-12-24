import { styled } from "../../stitches.config";
import type * as Stitches from '@stitches/react';

export const StyledButton = styled('button',{
    border:'transparent',
    borderRadius:'10px',
    padding:'.6rem 1rem',
    fontSize:'1rem',
    'textAlign':'center',

    variants:{
        color:{
            'lightBlueBtn':{
                'backgroundColor':'$lightBlue',
                color:'$white',
            },
            'whiteBtn':{
                'backgroundColor':'$white',
                color:'$thickBlue'
            }
        }
    }

})

export type StyledButtonVariants =   Stitches.VariantProps<typeof StyledButton>