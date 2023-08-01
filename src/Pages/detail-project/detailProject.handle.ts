//redux slice
import { getListStatus,getListPriority, getTaskType, getMemberListByProject} from '../../redux/tasks-data/taskSlice'
import { getProjectById } from '../../redux/project-data/projectData'
import { getListUser } from '../../redux/profile-data/profileData'
//react
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
//store redux
import { AppDispatch, RootState } from '../../redux/store'
//util
import { getLocal } from '../../utils/index'
//const
import { ACCESS_USER_ID } from '../../constant/constant'


const useGetAPITask = (idProj: number)=>{
    const dispatch = useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(getListStatus())
        dispatch(getListPriority())
        dispatch(getTaskType())
        dispatch(getMemberListByProject(idProj))
    },[])
}

export const useGetAPIDetail = ()=>{
    const currentProject = useSelector((state: RootState) => state.projectSlice.currentProject)
    const profile = useSelector((state: RootState) => state.profile.dataProfileByList)
    const isRender = useSelector((state: RootState) => state.membersSlice.rerenderShowModal)

    return {currentProject,profile,isRender}
}

export const useGetDataDependOnParams = (id: string | undefined, idProj: number) =>{
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        dispatch(getProjectById(idProj))
        dispatch(getListUser(getLocal(ACCESS_USER_ID)))
      },[id])
}


export default useGetAPITask