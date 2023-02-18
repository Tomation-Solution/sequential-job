import Box from "../Box/Box"
import DropdownImg from '../../asset/dropdown.png'
import {SelectBarV2Container} from './SelectBarV2.style'


type Prop = {
    label:string;
}
const SelectBarV2 = ({label}:Prop):React.ReactElement=>{


    return (
        <SelectBarV2Container>
            <img src={DropdownImg.src} alt="" />
            <select name="" id="">
                <option value="">{label}</option>
            </select>
        </SelectBarV2Container>
    )
}

export default SelectBarV2