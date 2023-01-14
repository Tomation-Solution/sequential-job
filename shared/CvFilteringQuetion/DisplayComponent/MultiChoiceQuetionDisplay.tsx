import Box from "../../Box/Box"
import { MultiChoiceQuetionType } from "../MultiChoiceQuetion"


type Prop = {
    data:MultiChoiceQuetionType
}
const MultiChoiceQuetionDisplay =({ data }:Prop):React.ReactElement=>{


    return (
        <Box css={{'li':{
            'padding':'.2rem 0'
        }}}>
            <h2>{data.quetion}{'  '}?<span>____</span></h2>
            <br />
            <ul>
                {
                    data.option_to_choose_from.map((ans,index)=>(
                        <li key={index}>{ans}</li>
                    ))
                }
            </ul>
            <br />
            <p>Answer:{' '}<small><strong>{data.answer.toString()}</strong></small></p>
            <p>Mark:{' '}<small><strong>{data.quetion_mark}</strong></small></p>
        </Box>
    )
}

export default MultiChoiceQuetionDisplay