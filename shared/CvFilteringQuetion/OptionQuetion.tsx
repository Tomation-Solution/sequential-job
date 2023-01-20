import Box from "../Box/Box"
import { useForm ,useFieldArray,Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRef, useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import { CvFilteringQuetionType, ViewType } from "../../pages/jobs/CvFilteringQuetion";


export type OptionQuetionType = {
    "quetion":string,
    "option_to_choose_from":string[],
    "answer":string,
    "quetion_mark":number
}

const schema = yup.object({
    quetion:yup.string().required('this field is needed'),
    option_to_choose_from:yup.array().of(yup.string()),
    answer:yup.string().required('this field is needed'),
    quetion_mark:yup.number().required('this field is needed'),

})
export type PropForQuetionComonents = {
    state:CvFilteringQuetionType,
    setState:(value:CvFilteringQuetionType)=>void;
    setView:(value:ViewType)=>void;
}
const OptionQuetion = ({state,setState,setView}:PropForQuetionComonents):React.ReactElement=>{

    const { register, watch,handleSubmit,formState: { errors } } = useForm<OptionQuetionType>({
        resolver: yupResolver(schema),
    });
    const [option_to_choose_from,setOption_to_choose_from] = useState<string[]>([])

    const handleAddNewEducationList = ()=>{
        setOption_to_choose_from([
          ...option_to_choose_from,
          'Hello'
        ])
      }
    
      const handleDeleteNewEducationList=(index:number)=>{
        const newList = [...option_to_choose_from]
        newList.splice(index,1)
        setOption_to_choose_from(newList)
      }


      const onSubmit = (data: OptionQuetionType) => {
        setState({...state,'option_quetion':[...state.option_quetion,data]})
        
        //se the page back to normal
        setView('idle')
      }
    return (
        <Box>
            <h2>Option Quetion</h2>
            <InputWithLabel label={`Quetion`} register={register('quetion')} />
        <form onSubmit={handleSubmit(onSubmit)}>

            <Box css={{'maxWidth':'400px'}}>
                    <Box>
                {
                    option_to_choose_from.map((option,index)=>(
                        <Box css={{'display':'flex','alignItems':'center','justifyContent':'space-between','maxWidth':'400px'}} key={index}>
                            <InputWithLabel label={`Options ${index+1}`} css={{'width':'70%'}} 
                            register={register(`option_to_choose_from.${index}`)}/>
                            {
                                index!==0&&(
                                    <Button type='button' color={'whiteBtn'} css={{'transform':'translateY(20px)'}} onClick={(e)=>{
                                        e.preventDefault()
                                        handleDeleteNewEducationList(index)
                                    }}>remove</Button>
                                )
                            }
                        </Box>
                    ))
                }
                <br />
                <Button color={'lightBlueOutline'} type='button'  onClick={(e)=>{
                    e.preventDefault()
                    handleAddNewEducationList()
                }}>Add</Button>
                </Box>
                <br />
                <Box>
                    <InputWithLabel  label="Correct Answer" register={register('answer')}/>
                </Box>
                <br />
                <Box>
                    <InputWithLabel  label="point optainable" register={register('quetion_mark')}/>
                </Box>
                
            </Box>
                <br />
                <br />
                <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'0 auto','width':'300px'}}>
                    <Button css={{'width':'30%','margin':'0 auto'}} >Create</Button>
                    <Button css={{'width':'30%','margin':'0 auto'}} color='whiteBtn' onClick={(e)=>{
                        e.preventDefault()
        
                        setView('idle')}}>Close</Button>
                </Box>
                <br />
        </form>

        </Box>
    )
}

export  default OptionQuetion