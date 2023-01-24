import api from "../axios";


export type InterviewProp = {
    "job_id":number,
    "list_of_available_dates":{
            "available_dates":string
        }[],
    "list_of_available_time":{
        "available_time":string
        }[],
    "rating_sheet":{
        "name":string,
        "cut_off":number
    }[],
    "list_of_email": {
        "email":string 
    }[]
}

export const InterViewSetUpApi = async (data:InterviewProp)=>{
    const resp = await api.post(`/interview/interview_setup/`,data);
    return  resp.data
}

export const view_interviewApi =async (job_id:number):Promise<InterviewProp>=>{
    const resp = await api.get(`/interview/interview_setup/${job_id}/`,);
    return  resp.data.data
}

type InviteCandidatesResponse = {
    "status": number,
    "message":string,
    "data": {
        "list_of_invited_ids": number[]
    }
}
export const InviteCandidatesApi = async (ids:number[]):Promise<InviteCandidatesResponse>=>{
    const form =  new FormData()
    form.append('list_of_id',JSON.stringify(ids))
    const resp = await api.post('/jobs/company-job-handler/invite_candidate/',form)

    return resp.data 
}