import { NextPage } from "next";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LandingPageLayout from "../layout/LandingPageLayout/LandingPageLayout";
import { JobType } from "../service/api/job.api";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import JobCard from "../shared/JobCard/JobCard";
import JobDetail from "../shared/JobDetail/JobDetail";
import OffCanvas from "../shared/OffCanvas/OffCanvas";
import WhiteInput from "../shared/WhiteInput/WhiteInput";

const dummyJobs:JobType[] =[]
const LandingPageIndex:NextPage = ()=>{
  const [currentJob,setCurrentJob] = useState<null|JobType>(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleJobDetail = (job:JobType)=>{
    setCavasOpenClose(true)
    setCurrentJob(job)
    console.log("Twoj")
  }

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1250px)'
  })
  const [cavasOpen, setCavasOpenClose] = useState(false)

  return (
    <LandingPageLayout>

    </LandingPageLayout>
  )
}

export default LandingPageIndex