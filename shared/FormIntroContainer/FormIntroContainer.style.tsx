import { styled } from "../../stitches.config"



export const FormIntroContainerStyle=styled('div',{
  'textAlign': 'center',
    'h2':{
      'color': '#3a3436',
      'paddingBottom': '.5rem',
    },
    'p':{
      'color':' #898989',

    },


   '@media screen  and (min-width: 600px)':{
      'h2':{
        'fontSize':'2.5rem',
        'fontWeight': '700px',
      },
      'p':{
        'fontSize': '1rem',
      }
    }
})

