import { styled } from "../../stitches.config";




export const GeneralLayoutStyle = styled('div',{

    backgroundColor:'$thickBlue',
    minHeight:'100vh',
})

export const MainBoardStyle= styled('div',{
    // 'textAlign':'left'
    padding:'1rem .8rem',
    '@bp3':{
        'width':'90%',
        'color':'white'
    }
})