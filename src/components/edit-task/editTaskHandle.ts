//react
import { useSelector } from 'react-redux'
//const
import { IListTaskDetail } from '../../constant/constant'
//redux store
import { RootState } from '../../redux/store'

const useAsignData = (curentTask: IListTaskDetail)=>{
    const assignListName = curentTask.assigness.map((item) => { return item.name })
    const assignListId = curentTask.assigness.map((item) => { return item.id })
    const assignListAvatar = curentTask.assigness.map((item) => { return item.avatar })
    return {assignListName, assignListId, assignListAvatar}
}

const useSelectorData = ()=>{
    const isRender = useSelector((state:RootState)=> state.membersSlice.rerenderShowModal)
    const listOfPriority = useSelector((state: RootState) => state.taskSlice.priorityList)
    const listOfTasktype = useSelector((state: RootState) => state.taskSlice.taskTypeList)
    const statusListOfType = useSelector((state: RootState) => state.taskSlice.statusList)
    const memberList = useSelector((state: RootState) => state.projectSlice.currentProject.members)
    return {isRender,listOfPriority,listOfTasktype,statusListOfType,memberList}
}

export {useAsignData, useSelectorData}