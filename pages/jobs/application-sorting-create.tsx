import { NextPage } from "next";
import LiveJobWithOtherContentLayout from "../../layout/LiveJobWithOtherContentLayout/LiveJobWithOtherContentLayout";
import Box from "../../shared/Box/Box";
import Button from "../../shared/Button/Button";
import WhiteInput from "../../shared/WhiteInput/WhiteInput";




const ApplicationSorting:NextPage = ()=>{

    return (
        <LiveJobWithOtherContentLayout
    header=''
        >
            <Box css={{
                'color':'$white','fontSize':'.8rem','maxWidth':'600px','margin':'0 auto',
                '@bp2':{
                    'fontSize':'1.1rem',
                    'p':{
                        'fontSize':'1rem'
                    }
                }
                }}>
            <Box css={{
                'textAlign':'center',
                'h2':{
                    'padding':'1rem 0','textAlign':'center'
                },
                
            }}>
                <h2>Applicant Sorting</h2>
                <p>In other to ease the recruiutment selection process, It is important that you set a pre-test that would help sort out qualified candidates during application submission.</p>
            </Box>
            <br />
            <br />

            <Box css={{'& div':{
                'display':'flex','justifyContent':'space-between','alignItems':'center','margin':'20px 0'
            },'maxWidth':'500px','margin':'0 auto','h2':{
                'textAlign':'center'
            }}}>
                
                <h2>Set Cut Off</h2>

                <Box>
                    <p>Suitable</p>
                    <WhiteInput/>
                </Box>

                <Box>
                    <p>Partially Suitable</p>
                    <WhiteInput/>
                </Box>

                <Box>
                    <p>ParNot Suitabletially </p>
                    <WhiteInput/>
                </Box>

                <Button color={'lightBlueBtn'} css={{'width':'40%','paddingTop':'.5rem','paddingBottom':'.5rem','margin':'0 auto'}}>
                    Next
                </Button>
            </Box>
            </Box>

        </LiveJobWithOtherContentLayout>
    )
}

export default ApplicationSorting