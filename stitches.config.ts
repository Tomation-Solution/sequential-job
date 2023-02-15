import { createStitches } from '@stitches/react';



export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
  } = createStitches({
    theme: {
      colors: {
        thickBlue:'#000022',
        lightBlue:'#24CDE2',
        white:'#FFFFFF',
        red:'#FF0000',
        grayish:'rgba(230, 232, 233, 0.29)',
        thickText:'#FFFFFFDE',
        lightText:'#FFFFFF',
      },
      
    //   conditions:{
    //     bp1:'@media (min-width:400px)',
    //   }
    },
    media: {
      bp1: '(min-width: 400px)',
      bp2: '(min-width: 500px)',
      bp3: '(min-width: 1000px)',
      bp4: '(min-width: 1300px)',
      bp5: '(min-width: 1500px)',
      bp900:'(min-width: 900px)',
      bp700:'(min-width: 700px)',
    },  
    utils: {
      marginX: (value:any) => ({ marginLeft: value, marginRight: value }),
      paddingX: (value:any) => ({ paddingLeft: value, paddingRight: value }),
    },
    
  });
  
  export const darkTheme = createTheme({
    'colors':{
      thickBlue:'white',
      lightBlue:'#24CDE2',
      white:'black',
      red:'#FF0000',
      grayish:'rgba(230, 232, 233, 0.29)',
      thickText:'#1c1e21',
      lightText:'black',
    },
  })
export const  landingPage =createTheme({
    'colors':{
      thickBlue:'#000022',
      lightBlue:'#24CDE2',
      white:'#FFFFFF',
      red:'#FF0000',
      grayish:'rgba(230, 232, 233, 0.29)',
      thickText:'#FFFFFFDE',
      lightText:'#FFFFFF',
    },
  })
 export const globalStyles = globalCss({
    '*':{
      // 'color':'$white',
      'listStyleType':'none',
    },
    'body':{
      'backgroundColor':'$thickBlue'
    }
  })