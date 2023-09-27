
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled } from '../../stitches.config';

export const CheckboxRoot = styled(Checkbox.Root, {
    all: 'unset',
    backgroundColor: '$lightText',
    width: '18px',
    height: '18px',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 2px 5px white`,
    border:'1px solid #6d6d6d',
    // '&:hover': { 
    //     backgroundColor:'$thickBlue' ,
    //     color:'white'

    // },


});
  
 export  const CheckboxIndicator = styled(Checkbox.Indicator, {
    color:'white',
  });