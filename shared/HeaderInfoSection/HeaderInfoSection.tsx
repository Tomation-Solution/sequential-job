import Box from "../Box/Box"
import Button from "../Button/Button"



type Prop ={
    heading:string;
    content:string;
    imageSrc:string;
    isBtn:boolean
}

const HeaderInfoSection= ({heading,content,imageSrc,isBtn}:Prop):React.ReactElement=>{


    return (
        <Box
        css={{'@bp3':{
            'display':'flex',
            'alignItems':'center',
            'justifyContent':'space-between',
            'maxWidth':'1000px',
            'margin':'0 auto'
        }}}
    >
        <Box css={{
            'textAlign':'center',
            'padding':'1rem',
            '@bp3':{
                'textAlign':'left',
                'width':'50%'
            }
        }}>
            <h2>{heading} </h2>
            <br />
            <p>
                {content}
            </p>
        {
            isBtn?
            <>
            <br />
        <Box css={{'display':'flex','justifyContent':'space-between','margin':'20px auto','maxWidth':'300px','@bp3':{
            'margin':'unset'
        }}}>
            <Button>
                Search For Job
            </Button>
            <Button color={'lightBlueOutline'}>
                Search For Job
            </Button>

        </Box>
            </>:''
        }
        </Box>

        <Box css={{
            'img':{
                'width':'100%',
                'height':'100%',
            },
            'width':'80%','margin':'0 auto',
            '@bp3':{
                'width':'50%'
            }
        }}>
            <img src={imageSrc} alt="" />
        </Box>
    </Box>

        )
}


export default HeaderInfoSection