import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './profile-data/profileData.ts'
import projectSlice from './project-data/projectData.ts'
import membersSlice from './members-data/membersSlice.ts'

export const store = configureStore({
  reducer: {
    profile : profileSlice,
    projectSlice,
    membersSlice,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch