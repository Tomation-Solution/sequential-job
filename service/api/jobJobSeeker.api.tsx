import api from "../axios"



type applyForJobsResponse = {
    "status": number,
    "message": string,
    "data": any
}

export const applyForJobs =async (job_id:number):Promise<applyForJobsResponse> => {
    
    const resp = await api.post('/jobs/job-seeker-view/',{job_id})
    return resp.data
}



export type getCvFilterQuetionsResponse = {
    "title": string,
    "fill_in_the_gap":{
        "id": number,
        "quetion":string
    } [],
    "filter_quetion_option": {
        "id": number,
        "quetion": string,
        "option_to_choose_from":string[]
    }[],
    "filter_quetion_multi_choice_quetion": {
        "id": number,
        "quetion": string,
        "option_to_choose_from": string[]
    }[],
}
export const getCvFilterQuetions = async (job_id:number):Promise<getCvFilterQuetionsResponse>=>{

    const resp =  await api.post(`/jobs/job-seeker-view/get_quetion/`,{job_id})
    return resp.data.data
}

type Prop ={
    data:getCvFilterQuetionsResponse,
    job_id:number
    
}


type submitCvFilterQuetionsResponseType ={
    'fillInTheGap_result':number,
    'quetionOption_result':number,
    'filterQuetionMultiChoiceQuetion':number,
    'job_variant':'filter_only'|'filter_and_test'
}
export const submitCvFilterQuetions = async ({data,job_id}:Prop):Promise<submitCvFilterQuetionsResponseType>=>{
    const senddata :any = {
        'job_id':job_id,
        'filter_quetion_option':data.filter_quetion_option,
        'fill_in_the_gap':data.fill_in_the_gap,
        'filter_quetion_multi_choice_quetion':data.filter_quetion_multi_choice_quetion
    }
    const resp =  await api.post(`/jobs/job-seeker-view/submit_quetion/`,senddata)
    return resp.data.data[0]
}