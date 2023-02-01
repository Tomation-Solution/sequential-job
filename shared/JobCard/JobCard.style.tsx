import { styled } from "../../stitches.config";




export const JobCardContainer = styled('div',{
    backgroundColor:'white',
    padding:'1rem .8rem',
    borderRadius:'10px',
    'color':'#000022',
    'margin':'20px 0',
    'boxShadow':'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    h2:{
        fontWeight:'lighter',
        paddingBottom:'.3rem'
    },
    h3:{
        paddingBottom:'.3rem'
    },
    '& svg':{
        color:'$lightBlue'
    },
    'span':{
        backgroundColor:'#F2EEFCAB',
        'display':'inline-block',
        'padding':'.3rem .8rem',
        'borderRadius':'5px'
    },
    p:{
        'padding':'.4rem 0'
    },
    '@bp2':{
        width:'360px'
    }
})