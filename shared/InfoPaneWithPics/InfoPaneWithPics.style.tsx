import { styled } from "../../stitches.config";


export const InfoPaneWithPicsContainer =styled('div',{
    backgroundColor:'#F2F2F2',
    'h3':{'padding':'.4rem 0'},
   
    'h3,p':{
        color:'$thickBlue',
        'textAlign':'center'
    },
    '&>div':{
        'padding':'1rem'
    },
    'img':{
        display:'none',
    },
    'svg':{
        'fontSize':'2rem',
        'color':'$thickBlue',
        'margin':'0 auto',
        'display':'block',
        'transform':'translateY(10px)'
    },
    '@bp2':{

        '&':{
            display:'flex',
            'maxWidth':'600px',
            'borderRadius':'10px',
            'overflow':'hidden'
        },
        'img':{
            'display':'block'
        },'svg':{'display':'none'},
       
        'h3,p':{
            'textAlign':'left',
        },
        '&>div':{
            'padding':'2rem',
            'transform':'translateY(30px)',
            lineHeight: '27px',
            fontStyle: 'normal',fontWeight: '400',

        }
    }
})