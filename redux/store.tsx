import { configureStore } from '@reduxjs/toolkit'
import jobSeekerInvitesSlice from './JobSeekerInterviewNotifcation/JobSeekerInterviewNotifcationSlice'

const store = configureStore({
    reducer: {
        jobSeekerInvites: jobSeekerInvitesSlice
    },
  })


export default store