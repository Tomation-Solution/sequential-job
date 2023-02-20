import { SignUpFormType } from "../../../pages/signup";
import api from "../../axios";

export type UserType = {
    "token_type": "access" |"refresh",
  "exp": number,
  "iat":number,
  "jti": string,
  "user_id": string,
  "email": string,
  "user_type": 'company'|'job_seakers'|'hr'|'admin'|'panelist';
  'full_name':string;
  'profile_image':string
}

export const signUpApi  = (data:SignUpFormType)=> api.post('/auth/create-company/',data).then(res=>res.data)




export const signInApi =(data:{'email':string,'password':string})=>api.post('/auth/login/',data).then(res=>res.data)


export type signUpAsJobSeeker = {
  "email":string,
    "full_name":string,
    "password":string,
    "phone_number":string,
    'passwordConfirmation':string,

}
export const signUpAsJobSeekerApi = async (data:signUpAsJobSeeker)=>{
    const  resp = await api.post('/auth/create-seeker/',data)
    return resp.data
}