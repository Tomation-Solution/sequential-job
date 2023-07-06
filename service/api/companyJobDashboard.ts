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







type CvServerTypeRepsonse = {
    full_name: string;
    profile_image: string;
    phone_number: string;
    user_extra: {
      job_categories: string[];
      job_seakers: {
        cv: string;
        notify_me_on: string;
        cvStucture: {
          first_name: string;
          middle_name: string;
          last_name: string;
          phone_number: string;
          email: string;
          addresse: string;
          state: string;
          country_of_residence: string;
          linkdin: string;
          twitter: string;
          personal_statement: string;
          education: {
            end_year: string;
            start_year: string;
            degree_type: string;
            school_name: string;
            course_of_study: string;
          }[];
          experience: {
            role: string;
            company: string;
            end_year: string;
            start_year: string;
            responsibilities: string;
          }[];
          certificaton: {
            issuer: string;
            start_year: string;
            certification: string;
          }[];
          refrences: {
            email: string;
            full_name: string;
            phone_number: string;
            relationship: string;
          }[];
        };
      };
    };
  };
  export const get_jobseerker_profile =
    async (user_id:string): Promise<CvServerTypeRepsonse> => {
      const resp = await api.get(`/auth/jobseeker-profile/?user_id=${user_id}`);
      return resp.data.data;
    };
