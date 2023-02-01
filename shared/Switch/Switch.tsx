import Box from "../Box/Box"
import React from 'react';
import { styled } from "../../stitches.config";
import { Flex, Label, SwitchRoot, SwitchThumb } from "./Switch.style";



type Prop = {
    label:string;
    onChange:(value:boolean)=>void;
    defaultChecked?:boolean
}
const Switch = ({onChange,defaultChecked=false,label}:Prop):React.ReactElement=>{
    return (
        <Box>
                <Flex css={{ alignItems: 'center' }}>
      <Label  htmlFor="airplane-mode" css={{ paddingRight: 15,'color':'$lightText' }}>
        <strong>{label}</strong>:
      </Label>
      <SwitchRoot defaultChecked={defaultChecked} id="airplane-mode" onCheckedChange={(value:boolean)=>{
        onChange(value)
      }}>
        <SwitchThumb />
      </SwitchRoot>
    </Flex>

        </Box>
    )
}

  
export default Switch