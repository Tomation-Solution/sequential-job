import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
// import { styled, keyframes } from '@stitches/react';
import { styled,keyframes } from '../../stitches.config';
import { DropdownMenuArrow, DropdownMenuContent, DropdownMenuItem } from './DropdownMenuDemo.style';
import { useRouter } from 'next/router';



type Prop = {
    trigger_btn:React.ReactNode,
    links?:{
      label:string,
      route:string,
      icon?:React.ReactNode
    }[]
}
const DropdownMenuDemo = ({trigger_btn,links=[]}:Prop) => {
  const route = useRouter()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {/* <IconButton aria-label="Customise options">
          <HamburgerMenuIcon />
        </IconButton> */}
        {trigger_btn}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          {
            links.map((data,index:number)=>(
            <DropdownMenuItem key={index} onClick={()=>{
              console.log('hello world')
              route.push(data.route)
            }}>
                {data.label} 
            </DropdownMenuItem>
            ))
          }

      <DropdownMenuArrow /> 
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};


export default DropdownMenuDemo;