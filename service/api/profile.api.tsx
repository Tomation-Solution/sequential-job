import api from "../axios";


type CompanyProfile ={
    "organisation_name": string,
    "organisation_name_shortname": string,
    "industry": string,
    "organisation_size": number,
    "location":string,
    "official_mail": string,
    "official_phone":string,
    "addresses": string
}
export type UserProfile = {
    'full_name': string,
    'profile_image': null|string,
    'phone_number': string,

    'user_extra':{
        'company'?:CompanyProfile
        'job_seakers'?:{cv:string}
    }
}



export const get_profile =  async ():Promise<UserProfile>=>{
    //this basically get any individual data
    const resp = await api.get('/auth/company-profile/')

    return resp.data.data
}



export type UpdateCompanyProfileApiProp ={
    full_name:string;
    phone_number:string;
    organisation_name:string;
    industry:string;
    organisation_size:number;
    location:string;
    official_mail:string;
    addresses:string;
    official_phone:string;
    // profile_image?:any;

}

type UpdateProfileResponse ={
    "message": string,
    "status_code": number,
    "data": any,
    "success": false
}
export const update_company_profile_api = async (data:UpdateCompanyProfileApiProp):Promise<UpdateProfileResponse>=>{
    const form =  new FormData()
    form.append('full_name',data.full_name)
    form.append('phone_number',data.phone_number)
    form.append('organisation_name',data.organisation_name)
    form.append('industry',data.industry)
    form.append('organisation_size',data.organisation_size.toString())
    form.append('location',data.location)
    form.append('addresses',data.addresses)
    form.append('official_phone',data.official_phone)
    const resp = await api.patch('/auth/company-profile/',form)

    return resp.data
}



export const updateUserImage = async (newImage:any)=>{
    const form =  new FormData()
    form.append('profile_image',newImage)
    const resp = await api.patch('/auth/company-profile/',form)
}


export type UpateJobSeekerPropType ={
    full_name:string;
    phone_number:string;
    cv?:any;
}
export const updateJobseekerApi = async (data:UpateJobSeekerPropType):Promise<UpdateProfileResponse>=>{
    const form = new FormData()
    if(data.cv){
        form.append('cv',data.cv)
    }
    form.append('full_name',data.full_name)
    form.append('phone_number',data.phone_number)
    const resp = await api.patch('/auth/jobseeker-profile/',form)
    return resp.data
}
export type updatePanelistProfileProp = {
    full_name:string;
    phone_number:string;
}
export const updatePanelistProfileApi = async (data:updatePanelistProfileProp)=>{
    const form = new FormData()
    
    form.append('full_name',data.full_name)
    form.append('phone_number',data.phone_number)
    const resp = await api.patch('/auth/panelist-profile/',form)
    return resp.data
}