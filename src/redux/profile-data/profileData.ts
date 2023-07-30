//const
import { IProfile } from './../../constant/constant';
//redux
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface IProfileInit {
    dataProfile: IProfile
}

const initialState :IProfileInit = {
    dataProfile:{
        avatar: "",
        email:"",
        id: -1,
        name: "",
        phoneNumber: "",
    }
}


export const profileSlice = createSlice({
  name: 'profileSlice',
  initialState,
  reducers: {
    setProfile: (state: IProfileInit ,action: PayloadAction<IProfile>)=>{
        state.dataProfile = action.payload;
    }
  },
})


export const { setProfile } = profileSlice.actions


export default profileSlice.reducer