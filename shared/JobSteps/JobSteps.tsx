import { JobStepsContainer, JobStepsContentContainer, StyledJobStepsContainerVariants } from "./JobSteps.style"
import jobimage from '../../asset/jobimage.png'

type  Props ={}
type JobStepProp =Props& StyledJobStepsContainerVariants
const JobSteps = (data:JobStepProp):React.ReactElement=>{


    return (
        <JobStepsContainer flex={data.flex}>
            <img src={jobimage.src} alt="" />
            <JobStepsContentContainer>
                <h2>1.{' '}Post Job</h2>
                <p>Sequential Jobs is here to help you find the best candidate that matches your job requirements. Post your job on our portal to get the right fit.</p>
            </JobStepsContentContainer>
        </JobStepsContainer>
    )
}
export default JobSteps