import { styled,keyframes } from '../../stitches.config';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';


import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
  } from '@radix-ui/react-icons';



export const slideUpAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
export  const slideRightAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(-2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });
  
 export const slideDownAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateY(-2px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  });
  
 export const slideLeftAndFade = keyframes({
    '0%': { opacity: 0, transform: 'translateX(2px)' },
    '100%': { opacity: 1, transform: 'translateX(0)' },
  });
  
export  const contentStyles = {
    minWidth: 220,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 5,
    boxShadow:
      '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  };
  
export  const DropdownMenuContent = styled(DropdownMenu.Content, contentStyles);
export const DropdownMenuSubContent = styled(DropdownMenu.SubContent, contentStyles);
  
export const DropdownMenuArrow = styled(DropdownMenu.Arrow, { fill: 'white' });
  
 export const itemStyles = {
    all: 'unset',
    fontSize: 13,
    lineHeight: 1,
    color: '$thickBlue',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    height: 25,
    padding: '.5rem 5px',
    position: 'relative',
    paddingLeft: 25,
    userSelect: 'none',
  
    '&[data-disabled]': {
      color: 'red',
      pointerEvents: 'none',
    },
  
    '&[data-highlighted]': {
      backgroundColor:'$thickBlue',
      color: 'white',
    },
  };
  
 export const DropdownMenuItem = styled(DropdownMenu.Item, itemStyles);
 export const DropdownMenuCheckboxItem = styled(DropdownMenu.CheckboxItem, itemStyles);
 export const DropdownMenuRadioItem = styled(DropdownMenu.RadioItem, itemStyles);
 export const DropdownMenuSubTrigger = styled(DropdownMenu.SubTrigger, {
    '&[data-state="open"]': {
      backgroundColor: 'red',
      color:' red',
    },
    ...itemStyles,
  });
  
 export const DropdownMenuLabel = styled(DropdownMenu.Label, {
    paddingLeft: 25,
    fontSize: 12,
    lineHeight: '25px',
    color:'yellow',
  });
  
export  const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
    height: 1,
    backgroundColor: 'red',
    margin: 5,
  });
  
 export const DropdownMenuItemIndicator = styled(DropdownMenu.ItemIndicator, {
    position: 'absolute',
    left: 0,
    width: 25,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });
  
 export const RightSlot = styled('div', {
    marginLeft: 'auto',
    paddingLeft: 20,
    color:'yellow',
    '[data-highlighted] > &': { color: 'white' },
    '[data-disabled] &': { color:'Yellow' },
  });
  
 export const IconButton = styled('button', {
    all: 'unset',
    fontFamily: 'inherit',
    borderRadius: '100%',
    height: 35,
    width: 35,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    backgroundColor: 'white',
    boxShadow: `0 2px 10px ${'black'}`,
    '&:hover': {
        backgroundColor:'$thickBlue',
        color: 'white',
    },
    '&:focus': { boxShadow: `0 0 0 2px black` },
  });