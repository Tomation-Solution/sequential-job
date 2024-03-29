import { NextPage } from "next";
import { useState } from "react";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";
import OptionQuetion from "../../../shared/CvFilteringQuetion/OptionQuetion";
import FillInGapQuetion from '../../../shared/CvFilteringQuetion/fillInGapQuetion'
import SelectComponent from "../../../shared/Select/Select";
import MultiChoiceQuetion from "../../../shared/CvFilteringQuetion/MultiChoiceQuetion";
import TabsComp from "../../../shared/Tabs/Tabs";
import FillInGapQuetionDispalay from "../../../shared/CvFilteringQuetion/DisplayComponent/fillInGapQuetionDispalay/fillInGapQuetionDispalay";
import OptionQuetionDisplay from "../../../shared/CvFilteringQuetion/DisplayComponent/OptionQuetionDisplay";
import MultiChoiceQuetionDisplay from "../../../shared/CvFilteringQuetion/DisplayComponent/MultiChoiceQuetionDisplay";
import { useMutation } from "react-query";
import { create_quetion } from "../../../service/api/job.api";
import useToast from "../../../hooks/useToastify";
import Preloader from "../../../shared/Preloader/Preloder";
import InputWithLabel from "../../../shared/InputWithLabel/InputWithLabel";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";




export type CvFilteringQuetionType = {
  'title':string;
    "fill_in_gap_quetion":{"quetion":string,"answer":string,"quetion_mark":number}[],
    "option_quetion":{
        "quetion":string,
        "option_to_choose_from":string[],
        "answer":string,
        "quetion_mark":number}[],
    "multi_choice_quetion":{
        "quetion":string,
        "option_to_choose_from":string[],
        "answer":string[],
        "quetion_mark":number}[],
}
export type ViewType ='option_quetion'|'fill_in_gap_quetion'|'multi_choice_quetion'|'idle'
const InsitalState:CvFilteringQuetionType  = {
    'fill_in_gap_quetion':[],
    'option_quetion':[],
    'multi_choice_quetion':[],
    title:''
}

const schema = yup.object({
  name:yup.string().required(),
})
const CvFilteringQuetion:NextPage = ()=>{
    const{notify} = useToast()
    const {isLoading,mutate} = useMutation(create_quetion,{
      'onError':(error:any)=>{
        notify('Please Check Your Network Something went wrong','error')
      },  
      'onSuccess':(resp,)=>{
        notify('Created Successfully','success')
        //takes me to list of
      }
    })

    const { register,watch, formState: { errors } } = useForm<{'title':string}>({
      resolver: yupResolver(schema)
    });

    const title = watch('title')
    const [state,setState] = useState<CvFilteringQuetionType>(InsitalState);
    const [view,setView] = useState<ViewType>('idle')
    const handleSubmit =()=>{
      if(!title){
        notify('Please Write A Title','error')
        return
      }
      const sent_data:any = {...state,title}
      mutate(sent_data)
    }
    return(
        <GeneralLayout>
          <Preloader loading={isLoading} />
          <h2>Set Sorting Question</h2>

          <InputWithLabel register={register('title')}
          label="Title" css={{'width':'60%','margin':'0 auto'}} />
            {
                view=='idle'?
            <Box>
              
        <SelectComponent
          showLabel={true}
          label='Pick Question Type'
          options={[
            {
              'name':'fill In The Gap Question',
              'value':'fill_in_gap_quetion'
            },
            {
              'name':'Option Question',
              'value':'option_quetion'
            },
            // {
            //   'name':'Multi Choice Quetion',
            //   'value':'multi_choice_quetion'
            // },
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
          view==='idle'?
          <TabsComp
            data={[
              {
                  'key':'fillinthegap',
                  'label':'Fill In The Gap',
                  'template':state.fill_in_gap_quetion.map((fillInGap,index)=>(
                    <Box key={index}><FillInGapQuetionDispalay data={fillInGap}/> <br /></Box>
                  ))
              },
              {
                'key':'option_quetion',
                'label':'Pick An Option',
                'template':state.option_quetion.map((option_quetion,index)=>(
                  <Box key={index}><OptionQuetionDisplay data={option_quetion}/> <br /> </Box>
                ))
            },
          //   {
          //     'key':'multi_choice_quetion',
          //     'label':'Multi Choice Quetion',
          //     'template':state.multi_choice_quetion.map((multi,index)=>(<Box>
          //       <MultiChoiceQuetionDisplay data={multi} key={index}/><br /></Box>))
          // },
          
          ]}
          />:''
        }


<br /><br />


      







            {/*this are component that helps to create the different vARIANT OF quetions */}
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
            {
                view=='multi_choice_quetion'?
                <MultiChoiceQuetion  setView={setView} state={state} setState={setState}/>:''
            }

<br />
{
          (state.fill_in_gap_quetion.length!==0||
          state.option_quetion.length!==0||
          state.multi_choice_quetion.length!==0)?
          <Button  shape={'usual_btn_shap'} css={{'margin':'0 auto','padding':'1rem .8rem','width':'300px'}} onClick={handleSubmit}> 
          Save Cv Sorting Question
          </Button>:''
        }


        </GeneralLayout>
    )
}


export default CvFilteringQuetion