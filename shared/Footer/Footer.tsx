import Box from "../Box/Box"
import { FooterContainer, FooterNavLinks, FooterNavLinksContainer } from "./Footer.style"
import WhiteLogo from '../../asset/logo.png'
import YoutubeImg from '../../asset/youtube.png'
import facebookImg from '../../asset/facebook.png'
import instagramImg from '../../asset/instagram.png'
import twitterImg from '../../asset/twitter.png'




const Footer = ():React.ReactElement=>{
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
            <img className="footer_logo" src={WhiteLogo.src} alt="" />
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
                <li>Pricing</li>
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