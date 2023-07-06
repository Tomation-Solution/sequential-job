import api from "../axios";


export type getSortedJobCandidateResponse =    {
    "id": number,
    "jobseekers": {
        "cv_url":string,
        "jobseekers_id":number,
        "email": string,
        'full_name':string
        user_id:number
    },
    "filter_quetions_score": 20,
    "job": 1,
}
export type getSortedJobCandidate = {
    job_id:number;
    status:'partially_suitable'|'suitable'|'not_suitable'
}
export const get_sorted_job_candidate = async (data:getSortedJobCandidate):Promise<getSortedJobCandidateResponse[]>=>{
    const form = new FormData()
    form.append('job_id',data.job_id.toString())
    form.append('status',data.status)
    // now if it a panelist we need to filter by only invited people
    const resp = await api.post(`/jobs/company-job-handler/get_sorted_job_candidate/`,form);
    return  resp.data.data
}


export const get_sorted_job_candidate_for_test = async (data:getSortedJobCandidate):Promise<getSortedJobCandidateResponse[]>=>{
    const form = new FormData()
    form.append('job_id',data.job_id.toString())
    form.append('status',data.status)
    // now if it a panelist we need to filter by only invited people
    const resp = await api.post(`/jobs/company-job-handler/get_sorted_job_candidate_test/`,form);
    return  resp.data.data
}