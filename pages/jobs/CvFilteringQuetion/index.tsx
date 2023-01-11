import { NextPage } from "next";
import { useState } from "react";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";
import OptionQuetion from "../../../shared/CvFilteringQuetion/OptionQuetion";
import FillInGapQuetion from '../../../shared/CvFilteringQuetion/fillInGapQuetion'
import SelectComponent from "../../../shared/Select/Select";





export type CvFilteringQuetionType = {
    "fill_in_gap_quetion":{"quetion":string,"answer":string,"quetion_mark":number}[],
    "option_quetion":{
        "quetion":string,
        "option_to_choose_from":string[],
        "answer":string,
        "quetion_mark":number}[],
    "multi_choice_quetion":{
        "quetion":string,
        "option_to_choose_from":string,
        "answer":string[],
        "quetion_mark":number}[]
}
export type ViewType ='option_quetion'|'fill_in_gap_quetion'|'multi_choice_quetion'|'idle'
const InsitalState:CvFilteringQuetionType  = {
    'fill_in_gap_quetion':[],
    'option_quetion':[],
    'multi_choice_quetion':[]
}
const CvFilteringQuetion:NextPage = ()=>{
    const [state,setState] = useState<CvFilteringQuetionType>(InsitalState);
    const [view,setView] = useState<ViewType>('idle')
    console.log({'from parent':state})
    return(
        <GeneralLayout>
            {
                view=='idle'?
            <Box>
              
        <SelectComponent
          showLabel={true}
          label='Pick Quetion Type'
          options={[
            {
              'name':'fill In The Gap Quetion',
              'value':'fill_in_gap_quetion'
            },
            {
              'name':'Option Quetion',
              'value':'option_quetion'
            },
            {
              'name':'Multi Choice Quetion',
              'value':'multi_choice_quetion'
            },
          ]}
          setVaue={(name:string,value:ViewType)=>{
           setView(value)
          }}
          name='job_type'
        />
                {/* <Button color={'lightBlueOutline'} css={{'margin':'1rem auto'}}>Add Quetion</Button> */}
            </Box>:''
            }
            {
                    view=='option_quetion'?
                    <OptionQuetion setView={setView} state={state} setState={setState}/>
                    :''
            }
            {
                    view=='fill_in_gap_quetion'?
                    
                    <FillInGapQuetion setView={setView} state={state} setState={setState}/>
                    :''
            }
        </GeneralLayout>
    )
}


export default CvFilteringQuetion