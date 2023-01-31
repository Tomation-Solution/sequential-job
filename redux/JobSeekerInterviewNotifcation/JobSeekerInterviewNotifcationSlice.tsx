import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hook";



type State = {
    invites_count:number
}

const initialState:State = {
    invites_count:0
}

const jobSeekerInvitesSlice = createSlice({
    name:'jobSeekerInvites',
    reducers:{
        updateInviteCount:(state,{payload}:PayloadAction<number>)=>{
            state.invites_count=payload
        }
    },
    initialState
})


export const { updateInviteCount } = jobSeekerInvitesSlice.actions
export const selectjobSeekerInvites =(state:RootState)=>state.jobSeekerInvites
export default jobSeekerInvitesSlice.reducer