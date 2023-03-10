import api from "../axios";


type generateJobDataApiResponseType ={
    "status": number,
    "message": string,
    "data": any
}

export const generateJobDataApi =async (job_id:number):Promise<generateJobDataApiResponseType> => {
    const resp = await api.post('/jobs/company-generate-job-final-result/',{job_id})
    return resp.data 
}


type get_applicantFinal_resultResponseType = {
    "id": 8,
    "jobseekers": {
        "email":string,
        "full_name": string
    },
    "filter_quetions_score": number,
    "test_quetions_score": number,
    "has_written_exam":boolean,
    "has_written_test": boolean,
    "has_mail_sent": boolean,
    "generated_panelist_total_score": number,
    "job": number
}

export const  get_applicantFinal_result = async (job_id:number):Promise<get_applicantFinal_resultResponseType[]>=>{
    const resp = await api.get('/jobs/company-generate-job-final-result/?job_id='+job_id)
    return resp.data.data
}


export type send_applicationLetterApiProp = {
    "applicant_id":number,
    "action":'selected'|'in_view'|'not_selected'|'idle'
}
export type send_applicationLetterApiResponse ={
    "message":string,
    "status_code": 200,
    "data": any,
    "success": boolean
}
export const send_applicationLetterApi = async (data:send_applicationLetterApiProp[]):Promise<send_applicationLetterApiResponse>=>{
    const resp = await api.post('/jobs/company-generate-job-final-result/send_final_letters/',{'list_of_applicant_and_action':data})
    return resp.data 
}