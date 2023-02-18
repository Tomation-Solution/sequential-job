import { styled } from "../../stitches.config";


export const HeroSectionV2Container = styled('div',{
    'height':'70vh',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',
    'display':'flex',
    'alignItems':'center',
    'justifyContent':'center',
    'textAlign':'center',
    'h2':{
        'padding':'1rem 0',
        // 'fontSize':
    },
    'p':{
        'fontSize':'1rem'
    },
    '@bp2':{
        'h2':{
            fontSize:'2rem'
        }
    }
})