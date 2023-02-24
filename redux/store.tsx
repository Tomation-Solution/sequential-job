import { configureStore } from '@reduxjs/toolkit'
import jobSeekerInvitesSlice from './JobSeekerInterviewNotifcation/JobSeekerInterviewNotifcationSlice'
import SearchSlice from './Search/SearchSlice'
const store = configureStore({
    reducer: {
        jobSeekerInvites: jobSeekerInvitesSlice,
        search:SearchSlice,
    },
  })


export default store