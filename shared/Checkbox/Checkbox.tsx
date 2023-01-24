import { CheckIcon } from '@radix-ui/react-icons';
import React from 'react';
import { CheckboxIndicator, CheckboxRoot } from './Checkbox.style';

type Prop = {
    onCheck:(checked:boolean)=>void;
    defaultChecked?:boolean
}
const CheckBox = ({onCheck,defaultChecked=false}:Prop) => (
      <CheckboxRoot defaultChecked={defaultChecked} id="c1" onCheckedChange={(checked:boolean)=>{
        onCheck(checked)
      }}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
);





export default CheckBox;
