//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//services
import { axiosWithAuth } from '../../services/services';
//const 
import { IGetMembers } from '../../constant/constant'
import type { PayloadAction } from '@reduxjs/toolkit'


interface IInitValue {
    memberList: IGetMembers[],
    rerenderShowModal: boolean
}

const initValue :IInitValue = {
    memberList : [],
    rerenderShowModal: false
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
    reducers: {
        setReRender: (state,action: PayloadAction<boolean>) =>{
            state.rerenderShowModal = action.payload
        }
    },
    extraReducers: (build) => {
        build.addCase(getMemberList.fulfilled, (state,action)=>{
            state.memberList = action.payload?.data.content
        })
    }
})


export const { setReRender} = membersSlice.actions

export default membersSlice.reducer