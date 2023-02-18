import { styled } from "../../stitches.config";


export const HeroSectionContainer = styled('div',{
    // backgroundColor:''
    padding:'1rem',
    'textAlign':'center',
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    backgroundRepeat: 'no-repeat',        
    display: 'block',
    width: '100%',
    height: '100%',

    'img':{
        'display':'none',
        'height':'100%'
    },
    '@bp700':{
        'height':'70vh',
        // 'border':'1px solid red',
        'display':'flex',
        'justifyContent':'space-between',
        'alignItems':'center',
        'maxWidth':'1100px',
        'margin':'0 auto',
        'img':{
            'display':'block',
        },
    }
})

export const HeroSectionContent = styled('div',{
    // 'border':'1px solid red',
    'button':{
        'margin':'10px auto'
    },
    'h2':{
        'padding':'1rem 0',
        // fontFamily:'Red Hat Text',
        // 'fontWeight':'900'
    },
    '@bp700':{
        'textAlign':'left',
        'margin':'unset',
        'maxWidth':'340px',
        'h2':{
            fontSize:'3rem',
            'fontWeight':'900',

        },
        'p':{
            'color':'#FFFFFF',
            'fontSize':'.9rem',
            'padding':'.6rem 0'
        },
        'button':{
            'margin':'unset',
            'width':'60%'
        }
        
    }
})