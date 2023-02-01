import { styled } from "../../stitches.config"

export const LoginNav = styled('div',{
    display:'flex',
    justifyContent: 'space-between',
    'alignItems':'center',
    'a':{
      'color': '$lightText',
      display:'inlineBlock',
      padding:'1rem',
    },
    'h2':{
      'color': '$lightText',
    }

})

export const LoginContainer= styled('div',{

        '@bp900':{
            display: 'flex',
            alignItems: 'center',
            height: '114vh',
            '&>div:nth-child(1)':{
              width: '45%',
            },
            '&>div:nth-child(2)':{
              width:' 45%',
            }
        }
})

1

/* url(${(props)=>props.image}); */
export const LoginContainerImg= styled('div',{
    display: 'none',
    '@bp700':{
        // backgroundImage:'linear-gradient(to bottom, #f7720557,black)',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',        
        display: 'block',
        width: '100%',
        height: '100%',
        
      '& img':{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }
    }
})


export const LoginContentContainer= styled('div',{
    padding: '1.7rem',
    maxWidth: '500px',
    margin: '0 auto',
  
    h2:{
      color:' #191a1b',
      padding: '1rem 0',
    },
    p:{
      padding: '1rem 0',
      color:'#4b5563',
      textAlign: 'center',
    },
    span:{
      color:'$thickText'
    },
    '@bp900':{
            height: '100%',
            maxWidth:' unset',
            padding: '2rem 0',
            button: {
            width: '70%',
            margin: '0 auto',
            }
    }
})
