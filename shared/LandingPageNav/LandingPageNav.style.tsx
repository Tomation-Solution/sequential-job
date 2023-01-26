import { styled } from "../../stitches.config";






export const LandingPageNavContainer = styled('div',{

})


export const NavLinksContainer = styled('ul',{
 '@bp3':{
    'display':'flex',
    // 'width':'40%',
    // 'border':'1px solid green',
    'justifyContent':'space-between',
    'width':'250px'
 }
})

export const NavLinks = styled('li',{
    

    'a':{
        'textDecoration':'none',
        color:'White',
        'display':'inline-block',
        'padding':'.8rem 0',
        'transition':'.4s all ease-in-out',
        '&:hover':{
            'color':'$lightBlue'
        }
    },
    '@bp3':{
        'a':{
            'padding':'unset',
            '&:hover':{
                color:'white',
                'borderBottom':'3px solid lightBlue'
            }
        }
    }
})

export const LandingNavBox = styled('div',{
    'position':'fixed','zIndex':'40',
    'height':'100%','top':'0',
    'right':'0'
    ,'width':'50%',
    'backgroundColor':'$thickBlue',
    'color':'$white',
    'padding':'2rem 1rem',
    boxShadow: `0 2px 5px white`,
   'transition':'.4s all ease',
   '@bp2':{
    'width':'200px'
   },
   '@bp3':{
    'width':'80%',
    'position':'static',
    'transform':'translateX(0) !important',
    'height':'unset',
    'boxShadow': `0 2px 5px transparent !important`,
    // 'border':'1px solid red',
    'display':'flex',
    padding:'unset',
   }
})