//scss
import './showMembers.scss'
//mui grid
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
//mui ui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
//const
import { IMembers } from '../../constant/constant'
//services
import { axiosWithAuth } from '../../services/services'
import { useDispatch, useSelector } from 'react-redux';
//store
import { AppDispatch, RootState } from '../../redux/store'
//redux slice
import { getListProject } from '../../redux/project-data/projectData'
import { setReRender } from '../../redux/members-data/membersSlice'



interface IProps {
    members: IMembers[],
    idProjectForRemovingMem: number
}

interface IMembersList {
    id: number,
    name: string,
    avatar: string
}

function ShowMembers({ members, idProjectForRemovingMem }: IProps) {
    const isRender = useSelector((state: RootState)=> state.membersSlice.rerenderShowModal)
    const dispatch = useDispatch<AppDispatch>()
    const memberList: IMembersList[] = []
    members.map((member) => {
        const { userId, avatar, name } = member
        const memChange = { id: userId, avatar, name }
        memberList.push(memChange)
    })
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', maxWidth: 50 },
        {
            field: 'avatar',
            headerName: 'Avatar',
            width: 60,
            headerAlign: 'left',
            align: 'left',
            renderCell: (params) => {
                return <Avatar sx={{ width: '30px', height: '30px' }} src={params.row.avatar}></Avatar>
            }
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 60,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'action',
            headerName: 'action',
            headerAlign: 'left',
            align: 'left',
            width: 60,
            renderCell: (params) => {
                const handleRemoveUser = async (id: number) => {
                    try {
                        const dataRemovingMember = {
                            projectId: idProjectForRemovingMem,
                            userId: id
                        }
                        await axiosWithAuth.post('/api/Project/removeUserFromProject', dataRemovingMember)
                        dispatch(getListProject())
                        dispatch(setReRender(!isRender))
                    } catch (error) {
                        console.log(error)
                    }
                }
                return (
                    <Button variant='contained' color='error' sx={{ width: '2rem', minWidth: 'unset' }} onClick={() => { handleRemoveUser(params.row.id) }}>X</Button>
                )
            }
        }
    ];

    const rows = [
        { id: 1, avatar: 'Snow', name: 'Jon' },
        { id: 2, avatar: 'Lannister', name: 'Cersei' },
        { id: 3, avatar: 'Lannister', name: 'Jaime' },
        { id: 4, avatar: 'Stark', name: 'Arya' },
        { id: 5, avatar: 'Targaryen', name: 'Daenerys' },
        { id: 6, avatar: 'Melisandre', name: null },
        { id: 7, avatar: 'Clifford', name: 'Ferrara' },
        { id: 8, avatar: 'Frances', name: 'Rossini' },
        { id: 9, avatar: 'Roxie', name: 'Harvey' },
    ];
    const dataResp = members ? memberList : rows
    return (
        <div className='show-members'>
            <Box sx={{ height: 200, width: '100%' }}>
                <DataGrid
                    rows={dataResp}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter={true}
                />
            </Box>
        </div>
    )
}

export default ShowMembers