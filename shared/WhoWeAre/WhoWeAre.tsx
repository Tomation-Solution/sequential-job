import Box from "../Box/Box"




const WhoWeAre = ():React.ReactElement=>{
    return (
        <Box>
            <br />
        <br />
        <br />
        <Box css={{'color':'#000000',
        'padding':'.4rem','textAlign':'center','maxWidth':'700px','margin':'0 auto',
        'h2':{
        'fontWeight':'700','fontSize':'2rem',},'p':{'fontSize':'.8rem'},
        '@bp2':{
            'h2':{
            'fontWeight':'600',
            'fontSize':'2.5rem'
            },'p':{'fontSize':'.9rem'},
        }
        }}>
        <h2>Who We Are</h2>
        <br/>
        <p>Sequential jobs is a job portal established in 2022 to simplify the job sourcing and placement processes for both the job seekers and employers respectively. It is developed to ensure that an average suitable applicant secures the dream job while ensuring that stress free operations are established in a stress free environment.</p>
        </Box>
        <br />
        </Box>
    )
}

export default WhoWeAre