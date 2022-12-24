import { styled } from "../../stitches.config";


export const  SearchBarContainer = styled('div',{
    // border:'1px solid red',
    'display':'inline-block',
    'borderRadius':'5px',
    'overflow':'hidden',
    position:'relative',
    
    input:{
        'border':'transparent',
        'padding':'.4rem 1.4rem',
        'backgroundColor':'#E6E8E94A',
        color:'$white'
    },
    'svg':{
        pointerEvents:'none',
        color:'#8B959B'
    },
    'svg:nth-child(2)':{
        position:'absolute',
        right:'8px',
        'top':'25%'
    },
    'svg:nth-child(1)':{
        position:'absolute',
        left:'8px',
        'top':'25%'
    },
})


