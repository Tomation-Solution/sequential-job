import { styled } from '@stitches/react';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

export const CheckboxRoot = styled(Checkbox.Root, {
    all: 'unset',
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 2px 5px white`,
    '&:hover': { 
        backgroundColor:'$thickBlue' ,
        color:'white'

    },
    '&:focus': { 
        boxShadow: `0 0 0 2px black`
      },
  });
  
 export  const CheckboxIndicator = styled(Checkbox.Indicator, {
    color: '$thickBlue' ,

    '&:hover':{
        color:'white'
    }
  });