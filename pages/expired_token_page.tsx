import { NextPage } from "next";
import { useRouter } from "next/router";
import GeneralLayout from "../layout/GeneralLayout/GeneralLayout";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";






const ExpiredTokenPage:NextPage = ()=>{
    const route = useRouter()


    const handleRoute = (value:string)=>{
      //
      route.push(value)
    }
    return (
        <GeneralLayout>
            <Box css={{'height':'80%','display':'flex','justifyContent':'center','flexDirection':'column'}}>
            <Box css={{'padding':'0 1rem','textAlign':'center','h1,small':{'color':'$white'},'span':{'color':'$lightBlue'}}}>
                <h1 style={{'fontSize':'2.5rem','textAlign':'center'}}>Hey!! Your Credentials has<span > Expired</span></h1>
                <p><small>  Dont worry just sign back in</small></p>
            </Box>
            <br />
            <br />
            <Box css={{'display':'flex','justifyContent':'space-between','margin':'0 auto','width':'200px','padding':'1rem 0'}}>
                <Button onClick={(e)=>handleRoute('/signin/')}>Sign in</Button>
                <Button color={'lightBlueOutline'} onClick={(e)=>handleRoute('/signup/')}>Sign up</Button>
            </Box>
            </Box>

        </GeneralLayout>
    )
}
export default ExpiredTokenPage