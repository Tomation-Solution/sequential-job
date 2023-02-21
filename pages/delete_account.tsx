import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMutation } from "react-query";
import useToast from "../hooks/useToastify";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import { delete_acct_api } from "../service/api/authentication/authentication.api";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import Preloader from "../shared/Preloader/Preloder";



const DeleteAccount:NextPage=()=>{
    const {notify }  =useToast()
    const route = useRouter()
    const {mutate,isLoading,status} = useMutation(delete_acct_api,{
        'onSuccess':(data)=>{
            notify('Your Account has been deleted','success')
        },
        onSettled(data, error, variables, context) {
            notify('Your Account has been deleted','success')
            window.localStorage.clear()
            route.push('/sigin')
        },
    })
  
    return( 
        <GeneralLayout>
            <Box css={{'color':'$lightText'}}>

            <Preloader loading={isLoading}/>
            <Box css={{'maxWidth':'700px','margin':'0 auto','h1':{
            'fontSize':'1.5rem','@bp2':{
                'fontSize':'2.5rem'
            }}
        }}>
              <h1 style={{'textAlign':'center'}}>
                Click the button below to  <span style={{'color':'#24CDE2'}}> delete</span> your account</h1>
              <br />
              <br />
              <Box css={{'display':'flex','justifyContent':'space-between','maxWidth':'300px','margin':'0 auto'}}>
              <Button color={'danger'} css={{'width':'35%'}} shape={'usual_btn_shap'}
                onClick={()=>{
                    if(window.confirm('Are Sure')){
                        mutate()
                    }
                }}
              >Delete</Button>
                            <Button  css={{'width':'35%'}} shape={'usual_btn_shap'}
                              onClick={()=>route.push('/dashboard_index')}
              >Go Home</Button>
              </Box>
            
            </Box>
            </Box>

        </GeneralLayout>
    )
}

export default DeleteAccount