//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//services
import { axiosWithAuth } from '../../services/services';
//const 
import { IGetMembers } from '../../constant/constant'

interface IInitValue {
    memberList: IGetMembers[]
}

const initValue :IInitValue = {
    memberList : []
}
export const getMemberList = createAsyncThunk(
    'membersSlice/getMemberList',
    async (key:string)=>{
        try{
            const resp = await axiosWithAuth.get(`/api/Users/getUser${key !== "" ? `?keyword=${key}` : ""}`)
            return resp
        }catch(error){
            console.log(error)
        }
    }
)

const membersSlice = createSlice({
    name:'membersSlice',
    initialState: initValue,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getMemberList.fulfilled, (state,action)=>{
            state.memberList = action.payload?.data.content
        })
    }
})




export default membersSlice.reducer