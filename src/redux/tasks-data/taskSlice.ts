//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//services
import { axiosWithCyberToken, axiosWithAuth } from '../../services/services';
//const 
import { IStatus, IPriority, ITaskType, IGetMembers } from '../../constant/constant'



interface IInitValue {
    statusList: IStatus[],
    priorityList: IPriority[],
    taskTypeList: ITaskType[],
    memberListOfProject :IGetMembers[]
}


const initValue: IInitValue = {
    statusList: [
        {
            statusId: "",
            statusName: "",
            alias: "",
            deleted: ""
        }
    ],
    priorityList: [
        {
            priorityId: 1,
            priority: "",
            description: "",
            deleted: false,
            alias: ""
        },
    ],
    taskTypeList: [
        {
            id: 1,
            taskType: ""
        },
    ],
    memberListOfProject: []
}

export const getListStatus = createAsyncThunk(
    'taskSlice/getListStatus',
    async () => {
        try {
            const resp = await axiosWithCyberToken.get('/api/Status/getAll')
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

export const getListPriority = createAsyncThunk(
    'taskSlice/getListPriority',
    async () => {
        try {
            const resp = await axiosWithCyberToken.get('/api/Priority/getAll?id=0')
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

export const getTaskType = createAsyncThunk(
    'taskSlice/getTaskType',
    async () => {
        try {
            const resp = await axiosWithCyberToken.get('/api/TaskType/getAll')
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

export const getMemberListByProject = createAsyncThunk(
    'taskSlice/getMemberListByProject',
    async (idProj: number) =>{
        try{
            const resp = await axiosWithAuth.get(`/api/Users/getUserByProjectId?idProject=${idProj}`)
            return resp
        } catch(error){
            console.log(error)
        }
    }
)


const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: initValue,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getListStatus.fulfilled, (state, action) => {
            state.statusList = action.payload?.data.content
        })
        builder.addCase(getListPriority.fulfilled, (state, action) => {
            state.priorityList = action.payload?.data.content
        })
        builder.addCase(getTaskType.fulfilled,(state,action)=>{
            state.taskTypeList =  action.payload?.data.content
        })
        builder.addCase(getMemberListByProject.fulfilled, (state,action)=>{
            state.memberListOfProject = action.payload?.data.content
        })
    }
})

export default taskSlice.reducer