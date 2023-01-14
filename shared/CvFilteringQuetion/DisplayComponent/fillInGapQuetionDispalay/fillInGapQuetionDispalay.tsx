import Box from "../../../Box/Box"
import { fillInGapQuetionType } from "../../fillInGapQuetion"



type Prop ={
    data:fillInGapQuetionType
}
const FillInGapQuetionDispalay = ({data}:Prop):React.ReactElement=>{



    return(
        <Box>
            <h2>{data.quetion}?{'  '} <span>____</span></h2>
        <br />
        <br />
            <p>Answer:{' '}<small><strong>{data.answer}</strong></small></p>
            <p>Mark:{' '}<small><strong>{data.quetion_mark}</strong></small></p>
        </Box>
    )
}

export default FillInGapQuetionDispalay