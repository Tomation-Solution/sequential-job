import React from "react";
import * as Select from "@radix-ui/react-select";
import type * as Stitches from '@stitches/react'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import { SelectIcon, SelectTrigger,SelectContent, StyledItem, StyledItemIndicator, SelectScrollUpButton, SelectViewport, SelectLabel, SelectScrollDownButton } from "./Select.style";
import Box from "../Box/Box";



const SelectItem = React.forwardRef(({ children, ...props }:any, forwardedRef) => {
    return (
      <StyledItem {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <StyledItemIndicator>
          <CheckIcon />
        </StyledItemIndicator>
      </StyledItem>
    );
  });
  SelectItem.displayName='SelectItem'
  
export type SelectProp = {
    label:string,
    options:{
        'name':string,
        'value':string
    }[],
    showLabel?:boolean,
    control_border?:Stitches.CSS,
    setVaue?:any;
    name?:string;
}
const SelectComponent = ({name='',setVaue=null,label,options,showLabel=true,control_border}:SelectProp):React.ReactElement => (
  <Box css={showLabel?{'display':'flex','flexDirection':'column',
  'label':{
    'color':'$thickText'
  }
  }:{}}>
    {
      showLabel?
      <label htmlFor="" style={{'padding':'.4rem 0'}}>{label}</label>
    :''
    }
    <Select.Root onValueChange={(value:string)=>{
      setVaue(name,value)
    }}>
    <SelectTrigger aria-label={label} css={control_border}>
      <Select.Value placeholder={label}/>
      <SelectIcon>
        <ChevronDownIcon />
      </SelectIcon>
    </SelectTrigger>
    <Select.Portal>
      <SelectContent>
        <SelectScrollUpButton>
          <ChevronUpIcon />
        </SelectScrollUpButton>
        <SelectViewport>
          <Select.Group>
            {/* <SelectLabel>Fruits</SelectLabel> */}
            {
                options.map((data,index)=>(
                    <SelectItem value={data.value} key={index}>{data.name}</SelectItem>
                ))
            }
          </Select.Group>
        </SelectViewport>
        <SelectScrollDownButton>
          <ChevronDownIcon />
        </SelectScrollDownButton>
      </SelectContent>
    </Select.Portal>
  </Select.Root>
  </Box>
);


export default SelectComponent;
