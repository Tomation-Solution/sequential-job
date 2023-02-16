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
    'outline':'none',

    // ':hover':{
    //     boxShadow:'0 0 0 1 white'
    // },
    variants:{
        color:{
            'lightBlueBtn':{
                'backgroundColor':'$lightBlue',
                color:'white',
            },
            'whiteBtn':{
                'backgroundColor':'$white',
                color:'$thickBlue'
            },
            'lightBlueOutline':{
                'backgroundColor':'$lightBlue',
                'color':'$lightBlue',
                'border':'1px solid $lightBlue'
            },
            'lightBlueShadow':{
                'backgroundColor':'transparent',
                'color':'$lightBlue',
                // 'border':'1px solid $lightBlue',
                'boxShadow':'rgba(36, 204, 226, 0.2) 0px 2px 8px 0px',
            },
            'danger':{
                'backgroundColor':'$thickBlue',
                'color':'Crimson',
                'border':'1px solid  Crimson',
            }
        },
        'shape':{
            'usual_btn_shap':{
                    'padding':'.7rem 1rem',
                    'borderRadius':'5px'
            }
        }
    },
    defaultVariants:{
        'color':'lightBlueBtn'
    }
})

export type StyledButtonVariants =   Stitches.VariantProps<typeof StyledButton>