import { styled } from "../../stitches.config";

import * as Select from "@radix-ui/react-select";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronUpIcon
  } from "@radix-ui/react-icons";


export const SelectTrigger = styled(Select.SelectTrigger, {
    all: "unset",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: "0 15px",
    fontSize: 13,
    border:'1px solid $white',
    
    lineHeight: 1,
    height: 35,
    gap: 5,
    backgroundColor: "$thickBlue",
    color: '$white',
    boxShadow: `0 2px 10px $white`,
    "&:hover": { 
      backgroundColor: '$thickBlue',
      color: '$white',
       },
    "&:focus": { boxShadow: `0 0 0 2px black` },
    "&[data-placeholder]": { color:'$white' }
  });
  
export  const SelectIcon = styled(Select.SelectIcon, {
    color: '$white'
  });
  
export   const SelectContent = styled(Select.Content, {
    overflow: "hidden",
    backgroundColor: "$thickBlue",
    borderRadius: 6,
    boxShadow:
      "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)"
  });
  
export  const SelectViewport = styled(Select.Viewport, {
    padding: 5
  });
  
  
export  const StyledItem = styled(Select.Item, {
    fontSize: 13,
    lineHeight: 1,
    color: '$white',
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    height: 25,
    padding: "0 35px 0 25px",
    position: "relative",
    userSelect: "none",
  
    "&[data-disabled]": {
      color: 'gray',
      pointerEvents: "none"
    },
  
    "&[data-highlighted]": {
      outline: "none",
      backgroundColor: '$thickBlue',
      color: '$white'
    }
  });
  
export  const SelectLabel = styled(Select.Label, {
    padding: "0 25px",
    fontSize: 12,
    lineHeight: "25px",
    color:'gray'
  });
  
  
export  const StyledItemIndicator = styled(Select.ItemIndicator, {
    position: "absolute",
    left: 0,
    width: 25,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center"
  });
  
export  const scrollButtonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 25,
    backgroundColor: '$thickBlue',
    color: '$white',
    cursor: "default"
  };
  
export  const SelectScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);
  
export  const SelectScrollDownButton = styled(
    Select.ScrollDownButton,
    scrollButtonStyles
  );