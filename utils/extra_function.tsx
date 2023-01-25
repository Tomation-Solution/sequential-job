
/* @ts-ignore */
import cookieCutter from 'cookie-cutter'
import jwt_decode from "jwt-decode";
import { UserType } from '../service/api/authentication/authentication.api';

export const getUser = ():UserType|null=>{
    try{
        const logged_in_user:UserType = jwt_decode(JSON.parse( cookieCutter.get('user')).access)
        return logged_in_user
    }catch(err:any){
        return null
    }

    }