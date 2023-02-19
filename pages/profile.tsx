import { NextPage } from "next";
import { useMutation, useQuery } from "react-query";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import { get_profile, updateUserImage } from "../service/api/profile.api";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import InputWithLabel from "../shared/InputWithLabel/InputWithLabel";
import Preloader from "../shared/Preloader/Preloder";
import CompanyProfileForm from "../shared/ProfileForm/CompanyProfileForm";
import { getUser } from "../utils/extra_function";
import {BsFillCameraFill} from 'react-icons/bs'
import useToast from "../hooks/useToastify";
import JobSeekerProfile from "../shared/ProfileForm/JobSeekerProfile";
import PanelistProfileForm from "../shared/ProfileForm/PanelistProfileForm";
import { useTheme } from "next-themes";

const ImageBoxCss ={
    'width':'150px','height':'150px','borderRadius':'50%',
    'border':'1.5px solid $lightBlue','margin':'0 auto','position':'relative',
    'overflow':'hidden',
}

const Profile:NextPage = ()=>{
    const user = getUser()
    const {notify}=useToast()
    const { theme, setTheme } = useTheme();

    const { isLoading,data,refetch} = useQuery(['profile',user?.user_id],get_profile)
    const {mutate,isLoading:updating_image} = useMutation(updateUserImage,{
        'onSuccess':(data)=>{
            notify('Updated','success')
            refetch()
        }
    })
    return (
        <GeneralLayout> 
            <Preloader loading={isLoading||updating_image}/>
            <h2 style={{'textAlign':'center'}}>Profile</h2>
        <br />
            <Box  css={{'maxWidth':'500px','margin':'10px auto'}}>
                <Box css={{'width':'150px','height':'150px','margin':'0 auto','position':'relative'}}>
                <Box css={ImageBoxCss}>
                    <img style={{'width':'100%','height':'100%'}} src={data?.profile_image?data?.profile_image:''} alt="" />
                </Box>
                <label style={{'position':'absolute','fontSize':'2rem','color':theme==='dark'?'black':'white','zIndex':'100','display':'block',
                            'bottom':'0','right':'10px','cursor':'pointer'
                    }} htmlFor='img_file'>
                <BsFillCameraFill />
                </label>
                </Box>
<input type="file" name="img_file" id="img_file" style={{'display':'none'}} onChange={(e)=>{
    console.log(e.target.files)
    if(e.target.files){
        mutate(e.target.files[0])
    }
}} />
                {
                    user?.user_type==='company'?
                    data?
                    <CompanyProfileForm defualtValue={data}/>:'':' '
                }
                {
                    user?.user_type==='job_seakers'?
                    data?
                    <JobSeekerProfile defualtValue={data}/>
                    :'':''
                }
                {
                    user?.user_type==='panelist'?
                    data?
                    <PanelistProfileForm defualtValue={data}/>
                    :'':''
                }
            </Box>
            <br /><br /><br /><br /><br /><br /><br /><br /><br />
        </GeneralLayout>
    )
}

export default Profile