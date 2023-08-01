//react
import { useSelector } from 'react-redux';
//redux store
import { RootState } from '../../redux/store'
//mui ui
import { Theme } from '@mui/material/styles';

const useGetTaskAPIFromRedux = ()=>{
    const priorityList = useSelector((state: RootState)=> state.taskSlice.priorityList)
    const statusList = useSelector((state: RootState)=> state.taskSlice.statusList)
    const taskTypeList = useSelector((state: RootState)=> state.taskSlice.taskTypeList)
    const listMember = useSelector((state: RootState)=> state.taskSlice.memberListOfProject)
    return {priorityList, statusList, taskTypeList, listMember}
}

export function getStyles(name: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default useGetTaskAPIFromRedux