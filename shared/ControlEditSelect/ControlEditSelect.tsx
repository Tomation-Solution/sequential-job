import { useEffect, useState } from "react"
import Box from "../Box/Box"
import SelectComponent, { SelectProp } from "../Select/Select"
import {FaWindowClose} from 'react-icons/fa'
import InputWithLabel from "../InputWithLabel/InputWithLabel"
import {RiPencilFill} from 'react-icons/ri'
import {TfiReload} from 'react-icons/tfi'
import useToast from "../../hooks/useToastify"

// this helps when your select bar has a defualt value and u want to edit it or take it back to the previous value
// most used whenu  are editing some kind of info
type Prop ={
    previous_value:string,
    setValue:any,
}
// const IconStyles = {''}
type ControlEditSelectProp = SelectProp&Prop
const ControlEditSelect = ({previous_value,setValue,name,label,...rest}:ControlEditSelectProp):React.ReactElement=>{
    const [isEdit,setEdit] = useState(false)
    const {notify} = useToast()
    const [previousData,setPreviousData] = useState<any>()
    useEffect(()=>{
        if(!isEdit){
            //if edit is not true this means we want to save the previous data 
            
            setValue(name,previous_value)
        }
    },[isEdit])
    return (
        <Box css={{'display':'flex','alignItems':'center','flexDirection':'row-reverse',
        'justifyContent':'space-between',
            '& div:nth-child(1)':{},
            '& div:nth-child(2)':{
                'width':'90%'
            }
        }}>
            <Box 
            // css={{'transform':'translateY(-10px)'}}
            >
                {
                    isEdit?
                    <TfiReload onClick={e=>{
                        notify(`Rolling back ${label} to previous value`,'success')
                        setEdit(false)}} style={{'color':'crimson'}}/>
                    :
                    <RiPencilFill onClick={e=>setEdit(true)} style={{'color':'#24CDE2'}}/>
                }
            </Box>
            {
                isEdit?
                <SelectComponent 
                setVaue={setValue}
                
                label={label} name={name} {...rest}/>
                :
            <InputWithLabel value={previous_value} label={label} disabled={true}  />
            }
        </Box>
    )
}

export default ControlEditSelect