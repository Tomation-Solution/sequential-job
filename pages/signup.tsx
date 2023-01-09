import { NextPage } from "next";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import InputWithLabel from "../shared/InputWithLabel/InputWithLabel";
import Pane from "../shared/Pane";
import Signupsvg from '../asset/signupsvg.svg'


const cssStyleForInput = {
    'input':{
        // 'border':'1px solid '
        'backgroundColor':' rgba(242, 238, 252, 0.685);',
        'color':'$thickBlue',
        'border':'1px solid  #f2eefc0',
        '&:focus':{
            'border':'1px solid $lightBlue'
        }
    },
    'label':{
        color:'$thickBlue'
    }
}

type SignInFormType = {
    "email":string,
    "full_name":string,
    "password":string,
    "phone_number":string,
    "organisation_name":string,
    "industry":string,
    "addresses":string,
    "official_phone":string,
    "organisation_name_shortname":string
}
const Signup:NextPage =()=>{

    console.log({Signupsvg})

    return (
        <GeneralLayout remove_nav={true}>
            {/* <InputWithLabel label="Organization Name"/> */}
              <Box css={{'maxWidth':'600px','margin':'0 auto'}}>
               {/* <img src={Signupsvg.src} alt="" style={{'width':'90%'}} /> */}


                <Box css={{'h1':{
                        'color':'$white','padding':'.6rem'},
                        'p':{
                            'color':'rgba(242, 238, 252, 0.54)'},
                            'textAlign':'center'
                    }}>
                        <h1>Sign Up</h1>
                        <p>Organization</p>
                    </Box>
                <br />
                <form action="">
                    <Pane>
                        <InputWithLabel label="Organization Name" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Industry" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Organization Size" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Location" css={cssStyleForInput}/>

                        <br />
                        <InputWithLabel label="Email Address(Official)" css={cssStyleForInput}/>

                        <br />
                        <InputWithLabel label="Phone Number(Official)" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Password" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Confirm Password" css={cssStyleForInput}/>
    <br />
                    <Button css={{'margin':'0 auto'}}>Submit</Button>
                    </Pane>

                    <br />
                    <Button color={'lightBlueOutline'} css={{'margin':'0 auto'}}>Sign In</Button>
                </form>

              </Box>
        </GeneralLayout>
    )
}

export default Signup