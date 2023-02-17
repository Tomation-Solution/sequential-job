import { styled } from "../../stitches.config";


export const UploadCvCallToActionContainer= styled('div',{
    'padding':'1rem .8rem',

    '@bp700':{
        'display':'flex',
        'alignItems':'center',
        'justifyContent':'space-between',
        'maxWidth':'900px',
        'margin':'0 auto'
    }

})
export const CVCallImageContainer= styled('div',{
    'backgroundColor':' #24CDE2',
    'height':'304px',
    'width':'304px',
    borderTopRightRadius:'10px',
    borderBottomRightRadius:'10px',
    paddingRight:'10px',
    'margin':'0 auto',
    'img':{
        'width':'300px',
        'height':'300px',
        'objectFit':'cover',
        borderTopRightRadius:'10px',
        borderBottomRightRadius:'10px',
    },
    '@bp700':{
        'margin':'unset'
    }
})
export const UploadCvCallToActionContainerContent= styled('div',{

    color:'#424242',
    padding:'1rem',
    'textAlign':'left',
    'maxWidth':'470px',
    'h2':{
        'padding':'.8rem 0'
    },
    'p':{
        'fontSize':'.8rem'
    }
})