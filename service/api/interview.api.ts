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