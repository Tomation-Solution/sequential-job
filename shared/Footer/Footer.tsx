import Box from "../Box/Box"
import { FooterContainer, FooterNavLinks, FooterNavLinksContainer } from "./Footer.style"
import WhiteLogo from '../../asset/logo.svg'
import YoutubeImg from '../../asset/youtube.png'
import facebookImg from '../../asset/facebook.png'
import instagramImg from '../../asset/instagram.png'
import twitterImg from '../../asset/twitter.png'
import GoogleImg from '../../asset/google.svg'
import AppleImg from '../../asset/apple.svg'
import { useRouter } from "next/router"



const Footer = ():React.ReactElement=>{
    const route = useRouter()
    return (
        <FooterContainer>
            <Box
            css={{
                'maxWidth':'1300px',
                'margin':'0 auto',
                "@bp2":{
                    'display':'flex',
                    'justifyContent':'space-between',
                    'alignItems':'center',
                    '.footer_logo':{
                        // 'width':'150px'
                    }
                }
            }}
            > 
            <img className="footer_logo" src={WhiteLogo.src} alt=""  style={{'cursor':'pointer',}} onClick={e=>{
                route.push('/')
            }}/>
            <FooterNavLinksContainer>
            <FooterNavLinks>
                <p>For Job Seekers</p>
                <li>Browse Jobs</li>
                <li>Company Profile</li>
            </FooterNavLinks>

            <FooterNavLinks>
                <p>For Employers</p>
                <li>Search CV</li>
                <li>Post Job</li>
                <li onClick={(e)=>route.push('/pricing')}>Pricing</li>
            </FooterNavLinks>
            <FooterNavLinks>
                <p>Helpful Resources</p>
                <li>Terms of Use</li>
                <li>Privacy Centre</li>
                <li>Security Centre</li>
            </FooterNavLinks>
          

            </FooterNavLinksContainer>
            </Box>

           <Box css={{'maxWidth':'500px','margin':'0 auto','@bp3':{
            'transform':'translateX(100px)'
           }}}>
           <Box css={{
                'margin':'0 auto',
                // 'border':'1px solid green',
                'display':'flex','flexDirection':'column',
                'justifyContent':'center','alignItems':'center','gap':'10px',
                '@bp2':{
                    'flexDirection':'row','justifyContent':'space-between'
                }
            }}>
                <Box>
                    <p>Find us on social media:</p>
                    <Box css={{'display':'flex','width':'200px','justifyContent':'space-between','margin':'.5rem 0',
                    'img':{'display':'block','margin':'0','width':'15%'}}}>
                    <img src={facebookImg.src} alt="" />
                    <img src={twitterImg.src} alt="" />
                    <img src={instagramImg.src} alt="" />
                    <img src={YoutubeImg.src} alt="" />
                    </Box>
                </Box>
                <Box>
                    <p>Get the  App</p>
                    <Box 
                    css={{
                        'display':'flex',
                        'flexDirection':'column',
                        'gap':'10px',
                        'margin':'5px 0',
                        '@bp3':{
                            'flexDirection':'row',
                        }
                    }}
                    >
                    <Box>
                        <img src={GoogleImg.src} alt="" />
                    </Box>
                    <Box>
                        <img src={AppleImg.src} alt="" />
                    </Box>
                    </Box>
                </Box>
            </Box>

            <br />
            <br />
            <p >© 2023 Sequential  Jobs</p>
           </Box>
        </FooterContainer>
    )
}

export default Footer