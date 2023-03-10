import { styled } from "../../stitches.config";




export const TopNavContainer = styled('div',{
    // 'border':'1px solid red',
    color:'$white',
    'display':'flex',
    justifyContent:'space-between',
    'alignItems':'center',
    'padding':'.7rem 1.5rem'
})

export const NavToolBox= styled('div',{
    'display':'flex',
    'alignItems':'center',
    // border:'1px solid red',
    'width':'30%',
    'justifyContent':'space-between',
    'svg':{
        display:'block'
    },
    'img':{
        'width':'35px',
        'hieght':'35px',
        borderRadius:'9999px'
    },
    'div':{
        display:'flex',
        'alignItems':'center',
        'justifyContent':'space-between',
    },
    'div:nth-child(1)':{
        width:'80%',
        // 'border':'1px solid red'
    },
    'div:nth-child(2)':{
        width:'20%'
    },

    '@bp3':{
    'width':'200px',
    'div:nth-child(1)':{
        width:'70%',
    },
    }
})
