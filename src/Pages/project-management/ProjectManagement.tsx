//mui ui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Modal from '@mui/material/Modal';
//mui data grid
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
//scss
import './projectManagement.scss'
//componets
import EditProjectModal from '../../components/edit-project-modal/EditProjectModal';
import ShowMembers from '../../components/show-members/ShowMembers';
import AddMemberPopup from '../../components/add-member-popup/AddMemberPopup';
//react
import { useNavigate } from 'react-router-dom';
//services
import { getListProject, getCategory } from '../../redux/project-data/projectData';
//react
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store'
//const
import { IMembers } from '../../constant/constant'

function ProjectManagement() {
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const handleOpen = () => setOpenEditModal(true);
    const handleClose = () => setOpenEditModal(false);
    const [openMembers, setOpenMembers] = React.useState(false);
    const [openAddMember, setAddMember] = React.useState(false);
    const [listMember,setListMember] = React.useState<IMembers[]>([])
    const reducerListProduct = useSelector((state: RootState) => state.projectSlice.listProject)
    useEffect(() => {
        dispatch(getListProject())
        dispatch(getCategory())
    }, [])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        {
            field: 'projectName',
            headerName: 'Project Name',
            width: 200,
            align: 'left',
            headerAlign: 'left',
            renderCell: (params) => {
                return <Typography variant="h5" sx={{ color: '#0288d1' }}>
                    {params.row.projectName}
                </Typography>
            }

        },
        {
            field: 'categoryName',
            headerName: 'Category',
            width: 150,
            headerAlign: 'left',
            align: 'left'
        },
        {
            field: 'creator',
            headerName: 'Creator',
            type: 'string',
            width: 110,
            headerAlign: 'left',
            align: 'left',
            renderCell: (params) => {
                return (<Chip label={`${params.row.creator.name}`} variant="outlined" sx={{ color: '#72d772', borderColor: '#72d772', fontWeight: '600', borderRadius: '5px' }} />)
            }
        },
        {
            field: 'members',
            headerName: 'Members',
            headerAlign: 'left',
            align: 'left',
            width: 250,
            renderCell: (params) => {
                const hanldeTooltip = (e: React.MouseEvent<HTMLDivElement, MouseEvent>,listMember: IMembers[]) => {
                    e.stopPropagation()
                    setOpenMembers(true)
                    setListMember(listMember)
                }
                const handleOpenAddmem = (e: React.MouseEvent) => {
                    e.stopPropagation()
                    setAddMember(true)
                }
                return (
                    <>
                        <div className="members-group">
                            {params.row.members.map((mem: IMembers, index: number) => {
                                if (index <= 4) {
                                    return (<Avatar key={mem.userId} sx={{ height: '3rem', width: '3rem' }} onMouseOver={(e)=>{hanldeTooltip(e,params.row.members)}} src={mem.avatar}></Avatar>)
                                }
                            })}
                        </div>
                        <div className='chip-onclick' onClick={handleOpenAddmem}>
                            <Chip label="+" variant="outlined" sx={{ height: '2.5rem', marginLeft: '2px', fontSize: '1.4rem' }} />
                        </div>
                        <Modal
                            open={openMembers}
                            onClose={() => { setOpenMembers(false) }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <ShowMembers members={listMember} />
                        </Modal>
                    </>
                )
            }
        },
        {
            field: "action",
            type: 'actions',
            headerName: "Action",
            headerAlign: 'center',
            align: 'center',
            width: 150,
            sortable: false,
            renderCell: (params) => {
                const handleEdit = (e: React.MouseEvent) => {
                    e.stopPropagation()
                    console.log(params)
                    handleOpen()
                }
                const handleDelete = (e: React.MouseEvent) => {
                    e.stopPropagation()
                    // console.log(params)
                }
                const handleNavigateToDetail = (e: React.MouseEvent) => {
                    e.stopPropagation()
                    // console.log(params)
                    navigate(`/detail-project/4`)
                }
                return (
                    <div className="btn-group-table">
                        <Button sx={{ minWidth: '4rem', marginRight: '5px' }} variant='contained' color='primary' onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></Button>
                        <Button sx={{ minWidth: '4rem', marginRight: '5px' }} variant='contained' color='info' onClick={handleNavigateToDetail}><i className="fa-solid fa-eye"></i></Button>
                        <Button sx={{ minWidth: '4rem', marginRight: '5px' }} variant='contained' color='error' onClick={handleDelete}><i className="fa-solid fa-trash"></i></Button>
                    </div>
                )
            }
        }
    ];

    const rows = [
        { id: 1, projectName: 'Snow', categoryName: 'Jon', creator: 'John' },
        { id: 2, projectName: 'Lannister', categoryName: 'Cersei', creator: 'John' },
        { id: 3, projectName: 'Lannister', categoryName: 'Jaime', creator: 'John' },
        { id: 4, projectName: 'Stark', categoryName: 'Arya', creator: 'John' },
        { id: 5, projectName: 'Targaryen', categoryName: 'Daenerys', creator: 'John' },
        { id: 6, projectName: 'Melisandre', categoryName: null, creator: 'John' },
        { id: 7, projectName: 'Clifford', categoryName: 'Ferrara', creator: 'John' },
        { id: 8, projectName: 'Frances', categoryName: 'Rossini', creator: 'John' },
        { id: 9, projectName: 'Roxie', categoryName: 'Harvey', creator: 'John' },
        { id: 91, projectName: 'Roxie', categoryName: 'Harvey', creator: 'John' },
        { id: 92, projectName: 'Roxie', categoryName: 'Harvey', creator: 'John' },
        { id: 93, projectName: 'Roxie', categoryName: 'Harvey', creator: 'John' }
    ];

    const dataRender = reducerListProduct ? reducerListProduct : rows
    return (
        <div className="project-management">
            <div className="proj-management-title">
                <Typography variant="h3" gutterBottom>
                    Project Management
                </Typography>
                <div className="btn-proj-management-group">
                    <Button variant='outlined'>Sort age</Button>
                    <Button variant='outlined'>Clear filter</Button>
                    <Button variant='outlined'>Clear filter and sortes</Button>
                </div>
            </div>
            <div className="mui-data-grid-proj">
                <Box sx={{ height: ' 528px', width: '100%' }}>
                    <DataGrid
                        sx={{ fontSize: '1.4rem' }}
                        rows={dataRender}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 8,
                                },
                            },
                        }}
                        pageSizeOptions={[8, 10, 12]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                    <Modal
                        open={openEditModal}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <EditProjectModal />
                    </Modal>
                    <Modal
                        open={openAddMember}
                        onClose={() => { setAddMember(false) }}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        hideBackdrop={false}
                    >
                        <AddMemberPopup />
                    </Modal>
                </Box>
            </div>
        </div>
    )
}

export default ProjectManagement