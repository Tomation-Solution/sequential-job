import { styled } from "../../stitches.config";






export const LandingPageNavContainer = styled('div',{
   
})

export const SubMenue = styled('div',{
    display:'flex',
   'max-width':'1300px',
   'margin':'0 auto',
   
    'justifyContent':'space-between',
    'padding':'1rem 0',
    '.first_sub':{
        display:'flex',
        'maxWidth':'300px',
        'justifyContent':'space-between',
        
    },
    'a':{
        'color':'$thickBlue',
        'textDecoration':'none',
        padding:'0 .8rem',
        "@bp2":{
            fontSize:'1.1rem'
        }
    }

})