import Box from "../Box/Box"
import { useForm, useFieldArray, useWatch, Control } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useEffect, useRef, useState } from "react";
import InputWithLabel from "../InputWithLabel/InputWithLabel";
import Button from "../Button/Button";
import { CvFilterTestType, FillInTheGapTakeTestType } from "../../pages/job_seeker/cvfiltertest/[job_id]";
import { getCvFilterQuetionsResponse } from "../../service/api/jobJobSeeker.api";



const schema = yup.object({
    'fill_in_gap':yup.array().of(yup.object({
        quetion:yup.string(),
    answer:yup.string().required('this field is needed'),
    id:yup.number(),
    }))

})

type Prop = {
    finalData:CvFilterTestType;
    setFinalData:any;
    defualts?:getCvFilterQuetionsResponse
}
const FillinGapQuetionJobSeekerTake = ({finalData,setFinalData,defualts}:Prop):React.ReactElement=>{

    const { register,control, watch,handleSubmit,formState: { errors } } = useForm<{'fill_in_gap':FillInTheGapTakeTestType[]}>({
        resolver: yupResolver(schema),
        defaultValues:{
            'fill_in_gap':defualts?.fill_in_the_gap?defualts.fill_in_the_gap.map((data)=>{
                return {
                    'answer':'',
                    'id':data.id,
                    'quetion':data.quetion
                }
            }):[]
        },
      mode: "onBlur"
    });


    const {fields,append,remove} = useFieldArray({
        name:'fill_in_gap',control
    })

    const onSubmit = (data: {'fill_in_gap':FillInTheGapTakeTestType[]}) =>{
        console.log({'submitted Data':data})

        setFinalData({...finalData,'fill_in_the_gap':data.fill_in_gap})

    }
    useEffect(()=>{

    },[])
    console.log({errors})
    return (
        <Box>
         <h2>Section A</h2>
         <form 
         onSubmit={handleSubmit(onSubmit)}
         ><br />
           <Box css={{'maxWidth':'600px','margin':'0 auto'}}>
           {
                fields.map((data,index)=>(
                    <Box key={index} >
                         <h2>{data.quetion}?{'  '} <span>____</span></h2>
            <br />
                <InputWithLabel label="Answer" register={register(`fill_in_gap.${index}.answer`)} />
               
            <br />
                    </Box>
                ))
            }
            <br />
           <Button >Section B</Button>
           </Box>
         </form>
        </Box>
    )
}

export default FillinGapQuetionJobSeekerTake