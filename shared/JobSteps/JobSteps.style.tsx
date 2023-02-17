import { styled } from "../../stitches.config";
import type * as Stitches from '@stitches/react';


export const JobStepsContainer = styled('div',{
    padding:'2rem 1rem',
    '@bp700':{
        'display':'flex',
        'alignItems':'center',
        'justifyContent':'space-between',
        'div':{
            'width':'45%',
        },
        'img':{
            'width':'45%',

        }
    },

    'variants':{
        'flex':{
            'reverse':{
                'flexDirection':'row-reverse'
            },
            'no-reverse':{
                'flexDirection':'row'
            }
        }
    }
})

export const JobStepsContentContainer= styled('div',{
    'color':'$thickBlue',
    'p':{
        fontSize:'.9rem'
    },
    'h2':{
        'padding':'1rem 0'
    }
})

export type StyledJobStepsContainerVariants =   Stitches.VariantProps<typeof JobStepsContainer>
