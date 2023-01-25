import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import useToast from "../../../hooks/useToastify";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import { generateJobDataApi, get_applicantFinal_result, send_applicationLetterApi, send_applicationLetterApiProp } from "../../../service/api/companyJobDashboard";
import Box from "../../../shared/Box/Box";
import Button from "../../../shared/Button/Button";
import CheckBox from "../../../shared/Checkbox/Checkbox";
import JobDetail from "../../../shared/JobDetail/JobDetail";
import Preloader from "../../../shared/Preloader/Preloder";
import SelectComponent from "../../../shared/Select/Select";
import Table from "../../../shared/Table/Table";
import { TableColumnType } from "../../../shared/Table/Table.style";





const JobDashboard:NextPage =()=>{
    const {notify} =useToast();
    const route = useRouter();
    

    const [selected_applicants,setSelectedApplicants] = useState<number[]>([])
    const {job_id} = route.query
    const {isLoading,data,status,refetch} = useQuery('applicant_result_dashboard',()=>get_applicantFinal_result(typeof job_id==='string'?parseInt(job_id):0))
    const {isLoading:generating,mutate} = useMutation(()=>generateJobDataApi(typeof job_id=='string'?parseInt(job_id):0),{
        onSuccess:(resp)=>{
            if(resp.status==201){
                refetch()
            }
        }
    })

    const {mutate:sendLetter,isLoading:sendingLetters} = useMutation(send_applicationLetterApi,{
        onSuccess(data, variables, context) {
            refetch()
            notify('Letter sent succefully','success')
        },
        onError(error, variables, context) {
            console.log({error})
        },
    })
    const [letterType,setLetterType] = useState<send_applicationLetterApiProp['action']>('idle')

    const handleSendingLetters = ()=>{
        if (letterType=='idle'){
            notify('Please Select type of letter you want to send','error')
            return 
        }
        if(selected_applicants.length==0){
            notify('Please select at least on candidate','error')
            return 
        }
        let new_data:send_applicationLetterApiProp[] = []
        selected_applicants.map((applicantID,index)=>{
            new_data = [...new_data,{'action':letterType,'applicant_id':applicantID}]
            return selected_applicants
        })

        sendLetter(new_data)

    }
    const  prop_columns:TableColumnType[] =[

        {
            Header:'Select',
            accessor:'id',
            id:44,
            Cell:(tableProps:any)=>{
                return (
                    <p><CheckBox onCheck={(checked)=>{
                        const id = tableProps.row.original.id
                        if(checked){
                            // checkCandidate(applicant.id)
                            setSelectedApplicants( [id,...selected_applicants,])
                          }else{
                            // let postion_index = list_of_ids.indexOf(applicant.id)
                            setSelectedApplicants(selected_applicants.filter((aplicant_id,index)=>aplicant_id!==id)) 
                          }
                    }} /></p>
                )
            }
        },
        {
            Header:'Full Name',
            accessor:'jobseekers',
            id:1,
            Cell:(tableProps:any)=>{
                return (
                    <p>{tableProps.row.original.jobseekers.full_name}</p>
                )
            }
        },
        {
            Header:'Email ',
            accessor:'jobseekers',
            id:2,
            Cell:(tableProps:any)=>{
                return (
                    <p>{tableProps.row.original.jobseekers.email}</p>
                )
            }
        },
        {
            Header:'CvFilter Score',
            'accessor':'filter_quetions_score'
        },
        {
            Header:'Test Score',
            'accessor':'test_quetions_score'
        },
        {
            Header:'Panelist Final Result ',
            'accessor':'generated_panelist_total_score'
        },
        {
            Header:'Status',
            'accessor':'final_selection_state',
            id:-11,
            Cell:(tableProps:any)=>{
                return (
                            <p>{tableProps.row.original.final_selection_state}</p>
                    )
                }
            },
        {
            Header:'Mail Sent',
            'accessor':'has_sent_selection_mail',
            id:-41,
            Cell:(tableProps:any)=>{
                return (
                            <p>{tableProps.row.original.has_sent_selection_mail?'True':'False'}</p>
                    )
                }
            }
        ]
    useEffect(()=>{
        if(status=='error'){
            notify('Please CHeck Your network','error')
        }
    },[status])
    

    return(
        <GeneralLayout>
            <h3 style={{'textAlign':'center'}}>This shows all the peformance of all Invited Applicant</h3>
            <Preloader loading={isLoading||generating||sendingLetters}/>
            <br />
            <br />
            <Box css={{'width':'200px'}}>
            <SelectComponent
                                name="final_selection_state"
                                showLabel={false}
                                label='Send Letter by'
                                setVaue={(name:string,value:string)=>{
                                    setLetterType(value as send_applicationLetterApiProp['action'])
                                }}
                                options={[
                                    {'name':'Selected','value':'selected'},
                                    {'name':'In View','value':'in_view'},
                                    {'name':'Not selected','value':'not_selected'},
                                ]}
                                />
            </Box>
            {
                data?
                <Table prop_columns={prop_columns} custom_data={data}/>
                :''
            }

            <Box css={{'margin':'0 auto','width':'300px','display':'flex','justifyContent':'space-between'}}>
            <Button onClick={handleSendingLetters}>Send Letters</Button>
            <Button
            color={'lightBlueOutline'} 
            onClick={()=>mutate()}
            >Generate</Button>
            </Box>
        </GeneralLayout>
    )
}


export default JobDashboard