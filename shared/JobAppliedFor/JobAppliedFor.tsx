import { useState } from "react"
import { useQuery } from "react-query"
import { useMediaQuery } from "react-responsive"
import { JOBGRIDSTYLE } from "../../pages/dashboard_index"
import { JobType } from "../../service/api/job.api"
import { jobs_applied_for_list } from "../../service/api/jobJobSeeker.api"
import Box from "../Box/Box"
import JobCard from "../JobCard/JobCard"
import JobDetail from "../JobDetail/JobDetail"
import OffCanvas from "../OffCanvas/OffCanvas"
import Preloader from "../Preloader/Preloder"



const JobAppliedFor = ():React.ReactElement=>{
    const {data, isLoading} = useQuery('jobs_applied_for_list',jobs_applied_for_list)
    const [currentJob,setCurrentJob] = useState<null|JobType>(null)
  const [isOpen, setIsOpen] = useState(false)
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1250px)'
  })
    const handleJobDetail = (job:JobType)=>{
      setIsOpen(true)
      setCurrentJob(job)

    }
    console.log({'JobAppliedFor':data})
    return (
        <>
            <Preloader loading={isLoading}/>
        <Box css={JOBGRIDSTYLE}>
        {
            data?.map((value,index)=>(
                <Box onClick={()=>handleJobDetail(value.job)}>
                <JobCard job={value.job} key={index}/>
              </Box>
            ))
        }
        </Box>
        <OffCanvas
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      direction={isDesktopOrLaptop?'right':'bottom'}
     >
     {currentJob&&<JobDetail currentJob={currentJob}/>}

     </OffCanvas>
        </>
    )
}

export default JobAppliedFor