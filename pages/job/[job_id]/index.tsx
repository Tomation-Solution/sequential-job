import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import useToast from "../../../hooks/useToastify";
import GeneralLayout from "../../../layout/GeneralLayout/GeneralLayout";
import { get_applicantFinal_result } from "../../../service/api/companyJobDashboard";
import JobDetail from "../../../shared/JobDetail/JobDetail";
import Preloader from "../../../shared/Preloader/Preloder";
import Table from "../../../shared/Table/Table";
import { TableColumnType } from "../../../shared/Table/Table.style";





const JobDashboard:NextPage =()=>{
    const {notify} =useToast();
    const route = useRouter()
    const {job_id} = route.query
    const {isLoading,data,status} = useQuery('applicant_result_dashboard',()=>get_applicantFinal_result(typeof job_id==='string'?parseInt(job_id):0))
    

    const  prop_columns:TableColumnType[] =[
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
    ]
    useEffect(()=>{
        if(status=='error'){
            notify('Please CHeck Your network','error')
        }
    },[status])
    return(
        <GeneralLayout>
            <h3 style={{'textAlign':'center'}}>This shows all the peformance of all Invited Applicant</h3>
            <Preloader loading={isLoading}/>

            {
                data?
                <Table prop_columns={prop_columns} custom_data={data}/>
                :''
            }
        </GeneralLayout>
    )
}


export default JobDashboard