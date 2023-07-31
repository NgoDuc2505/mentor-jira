//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//services
import { axiosWithCyberToken, axiosWithAuth } from '../../services/services';
//const 
import { ICategory, IMembers, ICreator, IGetMembers, IListTask } from '../../constant/constant'

interface ICategoryCurrent {
    id: number,
    name: string
}

interface IInitSate {
    listProject: {
        members: IMembers[],
        creator: ICreator,
        id: number;
        projectName: string;
        description: string;
        categoryId: number;
        categoryName: string;
        alias: string;
        deleted: boolean;
    }[],
    category: ICategory[],
    currentProject: {
        lstTask: IListTask[],
        members: IGetMembers[],
        creator: ICreator,
        id: number,
        projectName: string,
        description: string,
        projectCategory: ICategoryCurrent,
        alias: string
    },
}

export const getListProject = createAsyncThunk(
    'projectSlice/getListProject',
    async () => {
        try {
            const resp = await axiosWithCyberToken.get('/api/Project/getAllProject')
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

export const getCategory = createAsyncThunk(
    'projectSlice/getCategory',
    async () => {
        try {
            const resp = await axiosWithCyberToken.get('/api/ProjectCategory')
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

export const getProjectById = createAsyncThunk(
    'projectSlice/getProjectById',
    async (idProj: number) => {
        try {
            const resp = await axiosWithAuth.get(`/api/Project/getProjectDetail?id=${idProj}`)
            return resp
        } catch (error) {
            console.log(error)
        }
    }
)

const initialState: IInitSate = {
    listProject: [
        {
            members: [
                {
                    userId: -1,
                    name: "",
                    avatar: ""
                }
            ],
            creator: {
                id: -1,
                name: ""
            },
            id: -1,
            projectName: "",
            description: "",
            categoryId: -1,
            categoryName: "",
            alias: "",
            deleted: false
        }
    ],
    category: [],
    currentProject: {
        lstTask: [
            {
                lstTaskDeTail: [],
                statusId: "-1",
                statusName: "BACKLOG",
                alias: "tồn đọng"
            },
        ],
        members: [
            {
                userId: -1,
                name: "user1",
                avatar: "https://ui-avatars.com/api/?name=Anh Cường",
                email: "",
                phoneNumber: ""
            },
        ],
        creator: {
            id: 5403,
            name: ""
        },
        id: 13356,
        projectName: "",
        description: "",
        projectCategory: {
            id: 2,
            name: ""
        },
        alias: ""
    },
}



const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {},
    extraReducers: (build) => {
            build.addCase(getListProject.fulfilled, (state, action) => {
                state.listProject = action.payload?.data.content
            })
            build.addCase(getCategory.fulfilled, (state, action) => {
                state.category = action.payload?.data.content
            })
            build.addCase(getProjectById.fulfilled,(state,action)=>{
                state.currentProject = action.payload?.data.content
            })
    }
}
)





// export const {  } = projectSlice.actions


export default projectSlice.reducer