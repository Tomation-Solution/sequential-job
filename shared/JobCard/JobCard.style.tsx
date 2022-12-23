import { styled } from "../../stitches.config";





export const JobCardContainer = styled('div',{
    backgroundColor:'$white',
    padding:'1rem .8rem',
    borderRadius:'10px',
    'color':'$thickBlue',
    'margin':'20px 0',

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