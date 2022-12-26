import { styled } from "../../stitches.config";


export const WhiteInputStyled = styled('input',{
        backgroundColor:' #D9D9D9',
        'border':'none',
        borderRadius:'15px',
        padding:'.6rem .8rem',
        'outline':'none',
        '&::placeholder':{
            color:'$thickBlue',
            fontSize:'1rem',
            'textAlign':'center',
            fontWeight:'bold'
        }
    })