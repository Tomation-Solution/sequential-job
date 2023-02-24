import { styled } from "../../stitches.config";




export const FooterContainer = styled('div',{
    'backgroundColor':'$thickBlue',
    'padding':'1.5rem .8rem',
    'img':{
        'margin':'0 auto',
        'display':'block',
    },
    'li':{
        'cursor':'pointer'
    },
    '@bp2':{
        'padding':'1rem 2rem',
        'img':{
            'margin':'unset'
        },
    }
})
export const FooterNavLinks = styled('div',{
    'p':{
        'color':'$lightBlue',
        'fontSize':'1.1rem',
        'padding':'.8rem 0'
    },
    'li':{
        'padding':'.4rem 0'
    }
})
export const FooterNavLinksContainer = styled('ul',{
    'display':'flex',
    'flexWrap':'wrap',
    'justifyContent':'space-between',
    'padding':'1rem .9rem',
    'textAlign':'center',

    '@bp2':{
        'textAlign':'left',
        'gap':'0 50px'
    },
    '@bp700':{
        gap:'0 200px'
    }

})