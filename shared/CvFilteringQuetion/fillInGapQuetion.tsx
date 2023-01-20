import Box from "../Box/Box"
import { useForm ,useFieldArray,Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useRef, useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import { CvFilteringQuetionType, ViewType } from "../../pages/jobs/CvFilteringQuetion";
import { PropForQuetionComonents } from "./OptionQuetion";


export type fillInGapQuetionType = {
    "quetion":string,"answer":string,"quetion_mark":number
}
const schema = yup.object({
    quetion:yup.string().required('this field is needed'),
    answer:yup.string().required('this field is needed'),
    quetion_mark:yup.number().required('this field is needed'),

})
const FillInGapQuetion = ({state,setState,setView}:PropForQuetionComonents):React.ReactElement=>{
    const { register, watch,handleSubmit,formState: { errors } } = useForm<fillInGapQuetionType>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: fillInGapQuetionType) => {
        setState({...state,'fill_in_gap_quetion':[...state.fill_in_gap_quetion,data]})
        //se the page back to normal
        setView('idle')
      }
      console.log({errors})
    return (
       <Box>
         <h2>Fill In The Gap Quetion</h2>

         <form onSubmit={handleSubmit(onSubmit)}>
            <InputWithLabel label="Quetion" register={register('quetion')} />
            <br />
             <Box css={{'maxWidth':'400px'}}>
            <InputWithLabel label="Answer" register={register('answer')} />
            <br />
            <InputWithLabel label="Point optainable" register={register('quetion_mark')} />
            <br />

            </Box>
            <br />
                <br />
                <Box css={{'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'0 auto','width':'300px'}}>
                    <Button css={{'width':'30%','margin':'0 auto'}} >Create</Button>
                    <Button css={{'width':'30%','margin':'0 auto'}} color='whiteBtn' onClick={(e)=>{
                          e.preventDefault()
                        setView('idle')
                    }}>Close</Button>
                </Box>
                <br />
         </form>
       </Box>
    )
}

export default FillInGapQuetion