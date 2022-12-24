import { styled } from "../../stitches.config";


export const NavContainer = styled('ul',{
    // border:'1px solid red',
    'position':'fixed',
    'bottom':'0',
    left:'0',
    'width':'100%',
    padding:'1rem',
    'color':'$white',
    display:'flex',
    'justifyContent':'space-between',
    'textAlign':'center',
    backgroundColor:'$thickBlue',
    'cursor':'pointer',
h2:{
    display:'none'
},
    'li':{
        fontSize:'.9rem',
        // 'border':'1px solid red'
        'svg':{
            'transition':'all .5s ease-in-out',
        },
        '&:hover > svg':{
            'color':'$lightBlue'
        }
    },
    'li svg':{
        fontSize:'1.5rem',
    },


        '@bp2':{
            'max-width':'600px',
            left: '50%',
            transform: 'translate(-50%, 0)',
        },
        '@bp3':{
            'max-width':'unset',
            'left':'unset',
            'transform':'unset',
            'position':'static',
            'flexDirection':'column',
            'textAlign':'left',
            padding:'1rem 1.3rem',
            'width':'20%',
            'color':'#FFFFFFDE',
            li:{
                display:'flex',
                'alignItems':'center',
                'width':'100%',
                margin:'.8rem 0',
                // fontSize:'1.2rem',
                'padding':'unset',
                // 'border':'1px solid white'
            },
            'li:hover p':{
                color:'$lightBlue',
            },
            'p':{
                paddingLeft:'.7rem'
            },
            h2:{
                display:'block',
                padding:'1.2rem 0',
                color:'$white'
            }
            
            
            
        }
})

