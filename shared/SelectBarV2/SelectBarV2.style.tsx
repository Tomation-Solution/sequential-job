import { styled } from "../../stitches.config";


export const SelectBarV2Container = styled('div',{
    'backgroundColor':'#FFFFFF',
    'display':'inline-block',
    'borderRadius':'5px',
    'paddingRight':'15px',
    'position':'relative',
    'select':{
    'backgroundColor':'transparent',
    'outline':'none',
    'border':'none',
     '-webkit-appearance': 'none',
     '-moz-appearance': 'none',
     'appearance': 'none',
     'width':'100%',
     'padding':'.8rem 1rem',
     'color':'$thickBlue',
    },
    'img':{
        'position':'absolute',
    right:'10px',
    'top':'45%',
    
    }
})