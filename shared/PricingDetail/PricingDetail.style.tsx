import { styled } from "../../stitches.config";



export const PricingDetailContainer = styled('div',{
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    'color':'#3A3A3A',
    padding:'1rem',
    'maxWidth':'400px',
    'border':'1px solid $thickBlue',
    'h2':{
        fontWeight:'700',
        fontSize:'1.6rem',
        'padding':'.4rem 0'
    },
    '.pricing_type':{
        fontWeight:'700'
    },
    '.pricing_info':{
        'color':'rgba(58, 58, 58,.6)',
        'padding':'.4em 0'
    }
})