//const
import { IProfile, IGetMembers } from './../../constant/constant';
//redux
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
//services
import { axiosWithAuth } from '../../services/services'

export interface IProfileInit {
  dataProfile: IProfile,
  dataProfileByList: IGetMembers | undefined,
}

const initialState: IProfileInit = {
  dataProfile: {
    avatar: "",
    email: "",
    id: -1,
    name: "",
    phoneNumber: "",
  },
  dataProfileByList: {
    avatar: "",
    email: "",
    userId: -1,
    name: "",
    phoneNumber: "",
  }
}

export const getListUser = createAsyncThunk(
  'profileSlice/getListUser',
  async (idFilter: number) => {
    try {
      const resp = await axiosWithAuth.get('/api/Users/getUser')
      const userProfileByList: IGetMembers = resp.data.content.find((item: IGetMembers) => {
        return item.userId === idFilter
      })
      return userProfileByList
    } catch (error) {
      console.log(error)
    }
  }
)


export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProfile: (state: IProfileInit, action: PayloadAction<IProfile>) => {
      state.dataProfile = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getListUser.fulfilled, (state, action) => {
      state.dataProfileByList = action.payload
    })
  }
})


export const { setProfile } = profileSlice.actions


export default profileSlice.reducer