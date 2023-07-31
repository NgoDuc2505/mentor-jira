//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//services
import { axiosWithCyberToken } from '../../services/services';
//const 
import { ICategory, IMembers, ICreator } from '../../constant/constant'


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
    category: ICategory[]
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
    category: []
}



const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getListProject.fulfilled, (state, action) => {
            state.listProject = action.payload?.data.content
        }),
        build.addCase(getCategory.fulfilled,(state,action)=>{
            state.category = action.payload?.data.content
        })
    }
}
)





// export const {  } = projectSlice.actions


export default projectSlice.reducer