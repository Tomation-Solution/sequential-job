import { CheckIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { CheckboxIndicator, CheckboxRoot } from './Checkbox.style';

type Prop = {
    onCheck:(checked:boolean)=>void;
    defaultChecked?:boolean
}
const CheckBox = ({onCheck,defaultChecked=false}:Prop) => {
  const [checked,setChecked] = useState(false);

  useEffect(()=>{
    setChecked(defaultChecked)
  },[])
  return(

    <CheckboxRoot defaultChecked={defaultChecked} id="c1" onCheckedChange={(value:boolean)=>{
      onCheck(value)
      setChecked(value)
    }}
      css={{'backgroundColor':checked?'#24cde2':'white'}}
    >
      <CheckboxIndicator>
        <CheckIcon />
      </CheckboxIndicator>
    </CheckboxRoot>
)
}





export default CheckBox;
