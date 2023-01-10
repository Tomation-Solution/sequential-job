import { JobCreateForm } from "../../pages/jobs/add-jobs";
import api from "../axios";





export const create_job_api = (job:JobCreateForm)=>{
        const form = new FormData()
    form.append('job_title',job.job_title)
    form.append('is_active',JSON.stringify(false))
    form.append('location',job.location)
    form.append('job_type',job.job_type)
    form.append('salary',JSON.stringify(job.salary))
    form.append('currency',job.currency)
    form.append('job_required_document',job.job_required_document)
    form.append('description_content',job.description_content)
    return  api.post('/jobs/company-job-handler/',form).then(res=>res.data)
}
export const get_jobs_api = ()=> api.get('/jobs/company-job-handler/').then(res=>res.data)