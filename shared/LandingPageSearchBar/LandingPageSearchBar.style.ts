import { styled } from "../../stitches.config";




export const LandingPageInputFieldContainer= styled('div',{

    // 'backgroundColor':'White',
    'borderRadius':'5px',
    'overflow':'hidden',
    'margin':'10px 0',
    '@bp2':{
        'margin':'unset'
    }

})
export const LandingPageInputField= styled('input',{
    'border':'1px solid transparent',
    'width':'100%',
    'padding':'.9rem 1rem',

    

})

export const LandingPageInputMainContainer = styled('div',{
    'button':{
        'width':'50%',
        'height':'unset',
        'borderRadius':'10px',
        'margin':'0 auto',

    },

    '@bp2':{
        display:'grid',
        'gridTemplateColumns':'1fr 1fr 45px',
        padding:'.5rem .7rem',
        'borderRadius':'5px',
        alignItems:'center',
        'backgroundColor':'white',
        'button':{
            'borderRadius':'5px',
            'width':'45px',
            'height':'45px',
            'display':'flex','alignItems':'center',
            'margin':'unset'
        }
    }
})