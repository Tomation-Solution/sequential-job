import { SignUpFormType } from "../../../pages/signup";
import api from "../../axios";



export const signUpApi  = (data:SignUpFormType)=> api.post('/auth/create-company/',data).then(res=>res.data)




export const signInApi =(data:{'email':string,'password':string})=>api.post('/auth/login/',data).then(res=>res.data)
