import React from "react";
import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import { SelectIcon, SelectTrigger,SelectContent, StyledItem, StyledItemIndicator, SelectScrollUpButton, SelectViewport, SelectLabel, SelectScrollDownButton } from "./Select.style";



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
  
type Prop = {
    label:string,
    options:{
        'name':string,
        'value':string
    }[]
}
const SelectComponent = ({label,options}:Prop):React.ReactElement => (
  <Select.Root>
    <SelectTrigger aria-label={label}>
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
);


export default SelectComponent;
