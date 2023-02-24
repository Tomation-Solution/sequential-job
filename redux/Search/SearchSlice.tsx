import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../hook";




type State = {
    job_title:string;
    job_type:string;
}
const initialState:State = {
    job_title:'',
    job_type:''
}
const SearchSlice = createSlice({
    name:'searchSlice',
    initialState,
    reducers:{
        updateJobTitle:(state,{payload}:PayloadAction<string>)=>{
            state.job_title= payload
        },
        updateJobType:(state,{payload}:PayloadAction<string>)=>{
            state.job_type= payload
        },
        updateAllSearchState:(state,{payload}:PayloadAction<State>)=>{
            state.job_type=payload.job_type
            state.job_title=payload.job_title
        }
    },
})

export const {updateJobTitle,updateJobType,updateAllSearchState} = SearchSlice.actions
export const selectSearch = (state:RootState)=>state.search
export default SearchSlice.reducer