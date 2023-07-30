import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profile-data/profileData.ts'

export const store = configureStore({
  reducer: {
    profile : profileSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch