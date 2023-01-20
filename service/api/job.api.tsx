import { JobCreateForm } from "../../pages/jobs/add-jobs";
import { CvFilteringQuetionType } from "../../pages/jobs/CvFilteringQuetion";
import api from "../axios";

export type JobType = {
    id:number;
    "job_title": string,
    "is_active": boolean,
    "location": string,
    "job_type": string,
    "salary": string,
    "currency": string,
    "job_required_document": string,
    "description": null,
    "job_filter": null|number,
    "description_content":string,
    interview?:number|null;
}



export const create_job_api = (job:JobCreateForm)=>{
        const form = new FormData()
    form.append('job_title',job.job_title)
    form.append('is_active',JSON.stringify(false))
    form.append('location',job.location)
    form.append('job_type',job.job_type)
    form.append('salary',JSON.stringify(job.salary))
    form.append('currency',job.currency)
    form.append('job_required_document',job.job_required_document.map((data,index)=>data.name).toString())
    form.append('description_content',JSON.stringify(job.description_content))
    return  api.post('/jobs/company-job-handler/',form).then(res=>res.data)
}
// 
export const get_jobs_api =async ():Promise<JobType[]>=> {

    const resp = await api.get('/jobs/company-job-handler/');
    return  resp.data.data
}

export const get_job_detail = async (id:number)=>{
    const resp = await api.get(`/jobs/company-job-handler/${id}/`);
    return  resp.data.data
}

export const create_quetion= async(data:CvFilteringQuetionType)=>{
    let senddata:any = {...data,'title':'Test Quetion'}
    const resp = await api.post('/jobs/company-filterquetion-handler/',senddata);
    return  resp.data.data

}

export const create_test = async (data:CvFilteringQuetionType)=>{
    let senddata:any = {...data,'title':'Test Quetion'}
    const resp = await api.post('/jobs/company-test-handler/',senddata);
    return  resp.data.data

}
type get_all_quetionResponse = {
    title:string;
    id:number
}
export const get_all_quetion =async ():Promise<get_all_quetionResponse[]> => {
    const resp = await api.get('/jobs/company-filterquetion-handler/list_qeutions/',);
    return  resp.data.data
}

type addQuetionToJobProp  = {
    "job_id":number,
    "id":number
}
export const add_quetion_to_job = async(data:addQuetionToJobProp)=>{
    const resp = await api.post('/jobs/company-filterquetion-handler/add_qeution_to_job/',{...data,'title':'..'});
    return  resp.data.data
}

type getCutOffForQuetionReponseType ={
    "id": number,
    "title": string,
    "suitable": number,
    "end_suitable": number,
    "partially_suitable": number,
    "end_partially_suitable": number,
    "not_suitable": number,
    "end_not_suitable": number,
    "company": number
}
// :Promise<getCutOffForQuetionReponseType>
export const getCutOffForQuetion =async (id:string):Promise<getCutOffForQuetionReponseType>=> {
    const resp = await api.get(`/jobs/company-filterquetion-handler/${id}/get_cut_off_for_quetion/`);
    return  resp.data.data
}
type setCutOffForQuetionProp = {
    "id": number,
    "suitable": number,
    "end_suitable": number,
    "partially_suitable": number,
    "end_partially_suitable": number,
    "not_suitable": number,
    "end_not_suitable": number,
}
export const setCutOffForQuetion = async (data:setCutOffForQuetionProp)=>{
    const resp = await api.post(`/jobs/company-filterquetion-handler/set_cut_off_for_quetion/`,data);
    return  resp.data
}