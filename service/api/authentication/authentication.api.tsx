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
}

export const signUpApi  = (data:SignUpFormType)=> api.post('/auth/create-company/',data).then(res=>res.data)




export const signInApi =(data:{'email':string,'password':string})=>api.post('/auth/login/',data).then(res=>res.data)
