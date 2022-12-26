import { styled } from "../../stitches.config";
import type * as Stitches from '@stitches/react';

export const StyledButton = styled('button',{
    border:'transparent',
    borderRadius:'10px',
    padding:'.6rem 1rem',
    fontSize:'1rem',
    'textAlign':'center',
    cursor:'pointer',
    display:'block',

    // ':hover':{
    //     boxShadow:'0 0 0 1 white'
    // },
    variants:{
        color:{
            'lightBlueBtn':{
                'backgroundColor':'$lightBlue',
                color:'$white',
            },
            'whiteBtn':{
                'backgroundColor':'$white',
                color:'$thickBlue'
            },
            'lightBlueOutline':{
                'backgroundColor':'$thickBlue',
                'color':'$lightBlue',
                'border':'1px solid $lightBlue'
            },
        }
    },
    defaultVariants:{
        'color':'lightBlueBtn'
    }
})

export type StyledButtonVariants =   Stitches.VariantProps<typeof StyledButton>