//scss
import './showMembers.scss'
//mui grid
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
//mui ui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
//const
import {IMembers} from '../../constant/constant'

interface IProps {
    members: IMembers[]
}

interface IMembersList {
    id: number,
    name: string,
    avatar: string
}

function ShowMembers({members}:IProps) {
    const memberList:IMembersList[] = []
    members.map((member)=>{
        const {userId, avatar, name} = member
        const memChange = {id : userId, avatar, name}
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
            renderCell: (params)=>{
                // console.log(params)
                return <Avatar sx={{width:'30px', height:'30px'}}>h</Avatar>
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
            width:60 ,
            renderCell: (params) => {
                // console.log(params.row)

                return (
                    <Button variant='contained' color='error' sx={{width:'2rem', minWidth:'unset'}}>X</Button>
                )
            }
        }
    ];

    const rows = [
        { id: 1, avatar: 'Snow', name: 'Jon'},
        { id: 2, avatar: 'Lannister', name: 'Cersei'},
        { id: 3, avatar: 'Lannister', name: 'Jaime'},
        { id: 4, avatar: 'Stark', name: 'Arya'},
        { id: 5, avatar: 'Targaryen', name: 'Daenerys'},
        { id: 6, avatar: 'Melisandre', name: null },
        { id: 7, avatar: 'Clifford', name: 'Ferrara'},
        { id: 8, avatar: 'Frances', name: 'Rossini'},
        { id: 9, avatar: 'Roxie', name: 'Harvey'},
    ];
    const dataResp = members ? memberList : rows
    return (
        <div className='show-members'>
            <Box sx={{ height: 200, width: '100%' }}>
                <DataGrid
                    rows={memberList}
                    columns={columns}
                    disableRowSelectionOnClick
                    hideFooter = {true}
                />
            </Box>
        </div>
    )
}

export default ShowMembers