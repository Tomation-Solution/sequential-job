import Box from "../Box/Box"




const VisionAndMission = ():React.ReactElement=>{

    return (

        <Box css={{'backgroundColor':'$thickBlue'}}>
  <br />
  <br />
  <Box css={{'@bp2':{
            'display':'flex','maxWidth':'800px','justifyContent':'space-between','alignItems':'center','margin':'0 auto'
          }}}>
            <Box css={{'padding':'1rem','maxWidth':'350px','textAlign':'left','h2':{'fontSize':'2rem'},'p':{'fontSize':'.9rem'}}}>
              <h2>Mission</h2>
              <br />
              <p>Sequential Jobs provides you with a hassle free easy to use and seamless experience towards landing your dream job. </p>
            </Box>
        
            <Box css={{'padding':'1rem','maxWidth':'330px','textAlign':'left','h2':{'fontSize':'2rem'},'p':{'fontSize':'.9rem'}}}>
              <h2>Vision</h2>
              <br />
              <p>We aim to simplify the rigorous process of getting your desired job within a fully automated environment.</p>
            </Box>
          </Box>
  <br />
  <br />
  <br />
</Box>
        
    )
}

export default VisionAndMission