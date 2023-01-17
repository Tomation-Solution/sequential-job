import api from "../axios";
import { JobType } from "./job.api";


 
export const get_jobs_related_to_panelist = async ():Promise<JobType[]> =>{
    const resp = await  api.get('/interview/panelist_view_jobs/')
    return resp.data.data

}

type get_rating_sheetProp ={
    "job_id":number,
    "job_applicant":number
}
type  getRatingSheetResponse =  {
    "interview": number,
    "job_seeker": number,
    "panelist": number,
    "rating_sheet": {
        "name": string,
        "value": string,
        "cut_off": number,
        'score'?:number
    }[],
    "interviewer_remark":string,
    "summary_of_qualification": string,
    "id": number;
}
export const get_rating_sheet =  async (data:get_rating_sheetProp):Promise<getRatingSheetResponse>=>{


    const resp = await api.post(`/interview/panelist_view_jobs/get_rating_sheet/`,data);
    return resp.data.data
}

export type rating_job_seekersProp = {
    "job":number,
    "job_applicant":number,
    "rating_sheet":
        {
            "value":string,
            "cut_off":number,
            "score":number
        }[],
    "interviewer_remark":string,
    "summary_of_qualification":string
}
export const rating_job_seekers = async (data:rating_job_seekersProp)=>{
    const resp = await api.post(`/interview/panelist_view_jobs/rating_job_seekers/`,data);
    return resp.data.data
}