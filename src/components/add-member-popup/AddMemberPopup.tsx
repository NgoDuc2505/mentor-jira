//mui ui
import Typography from '@mui/material/Typography';
//scss
import './addMemberPopup.scss'
//redux slice
import { getMemberList } from '../../redux/members-data/membersSlice'
//const
import { IGetMembers } from '../../constant/constant'
//react
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
//store
import { AppDispatch } from '../../redux/store'
//services
import { axiosWithAuth } from '../../services/services'
//redux slice
import {getListProject} from '../../redux/project-data/projectData'
//swal
import swal from 'sweetalert';

interface IProps {
    memberListData: IGetMembers[],
    idProject: number
}

function AddMemberPopup({ memberListData, idProject }: IProps) {
    const dispatch = useDispatch<AppDispatch>()
    const [inputValue, setInputValue] = useState<string>("")
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    useEffect(() => {
        dispatch(getMemberList(inputValue))
    }, [inputValue])

    const handleAddMember = async (idMember: number) => {
        try{
            console.log(idProject, idMember)
            const dataAssignToProject = {
                projectId :idProject ,
                userId: idMember
            }
            await axiosWithAuth.post('/api/Project/assignUserProject', dataAssignToProject)
            dispatch(getListProject())
            swal("Đã thêm!", {icon: "success"})
        }catch(error){
            console.log(error)
            swal("Bạn không phải người khởi tạo dự án này để thêm!", {icon: "error"})
        }
    }

    return (
        <div className="add-member-popup">
            <Typography variant='h4'>Add Member</Typography>
            <hr />
            <div className="add-member-content">
                <input type="text" placeholder='Enter name' onChange={handleChangeInput} />
                <div className="list-range-member">
                    {memberListData.map((item: IGetMembers) => {
                        return (<p onClick={() => { handleAddMember(item.userId) }}>{item.name}</p>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default AddMemberPopup