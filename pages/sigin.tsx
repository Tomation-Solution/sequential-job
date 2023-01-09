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

const Signup:NextPage =()=>{


    return (
        <GeneralLayout remove_nav={true}>
              <Box css={{'maxWidth':'600px','margin':'0 auto'}}>
               <img src={Signupsvg.src} alt="" style={{'width':'50%','display':'block','margin':'0 auto'}} />


                <Box css={{'h1':{
                        'color':'$white','padding':'.6rem'},
                        'p':{
                            'color':'rgba(242, 238, 252, 0.54)'},
                            'textAlign':'center'
                    }}>
                        <h1>Sign In</h1>
                        <p>Organization</p>
                    </Box>
                <br />
                <form action="">
                    <Pane>
                        <InputWithLabel label="Email" css={cssStyleForInput}/>
                        <br />
                        <InputWithLabel label="Password" css={cssStyleForInput}/>
                        <br />
                    <Button css={{'margin':'0 auto'}}>Submit</Button>
                    </Pane>

                    <br />
                    <Button color={'lightBlueOutline'} css={{'margin':'0 auto'}}>Sign Up</Button>
                </form>

              </Box>
        </GeneralLayout>
    )
}

export default Signup