//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//cscc
import './createTask.scss'
//customhook
import useGetTaskAPIFromRedux from './createTaskHandle'
//const
import { IGetMembers, regex, MenuProps } from '../../constant/constant'
//formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
//services
import { axiosWithAuth } from '../../services/services'
//swal
import swal from 'sweetalert';
//react
import { useDispatch, useSelector } from 'react-redux';
//redux store
import { AppDispatch, RootState } from '../../redux/store'
import { getProjectById } from '../../redux/project-data/projectData'
import { setReRender } from '../../redux/members-data/membersSlice'
//handle
import { getStyles } from './createTaskHandle'

interface IProps {
    idNumCustom: number,
}

function CreateTask({ idNumCustom }: IProps) {

    const dataReturnHook = useGetTaskAPIFromRedux()
    const memberList = dataReturnHook.listMember
    const dispatch = useDispatch<AppDispatch>()
    const theme = useTheme();

    const [personName, setPersonName] = React.useState<string[]>([]);
    const [priorityLisT, setPriorityList] = React.useState<string[] | undefined>([]);
    const [statusLisT, setStatusLisT] = React.useState<string[] | undefined>([]);
    const [typeList, setTypeList] = React.useState<string[] | undefined>([]);
    const [idMemAdd, setIdMemAdd] = React.useState<number[]>([])
    const [statusID, setStatusID] = React.useState<string | string[] | undefined>("")
    const [priorityID, setPriorityID] = React.useState<number>(0)
    const [typeID, setTypeID] = React.useState<number>(0)

    const isRender = useSelector((state: RootState) => state.membersSlice.rerenderShowModal)

  
    const handleChange = (event: SelectChangeEvent<typeof priorityLisT>) => {
        const data = dataReturnHook.priorityList.find((item) => { return item.priorityId === Number(event.target.value) })
        setPriorityID(Number(event.target.value))
        setPriorityList(
            typeof data?.priority === 'string' ? data?.priority.split(',') : data?.priority,
        );
    };

    const hadleChangeStatus = (event: SelectChangeEvent<typeof priorityLisT>) => {
        const valueId = event.target.value
        const data = dataReturnHook.statusList.find((item) => { return item.statusId === valueId })
        setStatusID(valueId)
        setStatusLisT(
            typeof data?.statusName === 'string' ? data?.statusName.split(',') : data?.statusName,
        );
    };

    const handleChangeType = (event: SelectChangeEvent<typeof priorityLisT>) => {
        const data = dataReturnHook.taskTypeList.find((item) => {
            return item.id === Number(event.target.value)
        })
        setTypeID(Number(event.target.value))
        setTypeList(
            typeof data?.taskType === 'string' ? data?.taskType.split(',') : data?.taskType,
        );
    };

    const handleChangeChip = (event: SelectChangeEvent<typeof personName>) => {
        const value = event.target.value
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );

    };

    const handleSetList = (item: IGetMembers) => {
        const indexDuplicate = idMemAdd.findIndex((items) => {
            return items === item.userId
        })
        if (indexDuplicate === -1) {
            setIdMemAdd([...idMemAdd, item.userId])
        } else {
            (idMemAdd.splice(indexDuplicate, 1))
            setIdMemAdd([...idMemAdd])
        }
    }

    const formik = useFormik({
        initialValues: {
            taskName: "",
            originalEstimate: 0,
            timeTrackingSpent: 0,
            timeTrackingRemaining: 0,
            description: "..."
        },
        validationSchema: Yup.object().shape({
            taskName: Yup.string().required('Project name can not be empty!').matches(regex.nameByVietnamese, 'Project name must be valid!'),
            originalEstimate: Yup.number().required('This field have to be filled'),
            timeTrackingSpent: Yup.number().required('This field have to be filled'),
            timeTrackingRemaining: Yup.number().required('This field have to be filled')
        }),
        onSubmit: async (value) => {
            try {
                const dataCreateTask = {
                    listUserAsign: idMemAdd,
                    taskName: value.taskName,
                    description: value.description,
                    statusId: statusID,
                    originalEstimate: value.originalEstimate,
                    timeTrackingSpent: value.timeTrackingSpent,
                    timeTrackingRemaining: value.timeTrackingRemaining,
                    projectId: idNumCustom,
                    typeId: typeID,
                    priorityId: priorityID
                }
                await axiosWithAuth.post('/api/Project/createTask', dataCreateTask)
                dispatch(getProjectById(idNumCustom))
                dispatch(setReRender(!isRender))
                swal("Đã tạo thành công!", { icon: "success" })
            } catch (error) {
                console.log(error)
                swal("Vui lòng kiểm tra lại thông tin!", {
                    icon: "error",
                });
            }
        }
    })

    return (
        <form action="" className="create-task" onSubmit={formik.handleSubmit}>
            <div className="create-task-header">
                <Typography variant='h3'>Create Task</Typography>
            </div>
            <hr />
            <div className="create-task-body">
                <div className='task-input project-select'>
                    <Typography variant='h4'>Project</Typography>
                    <input type="text" value={idNumCustom} disabled />
                </div>
                <div className="task-input task-name-input">
                    <Typography variant='h4'>Task name</Typography>
                    <input type="text" {...formik.getFieldProps("taskName")} />
                    <Typography variant='h6' color={'red'}>{formik.errors.taskName}</Typography>
                </div>
                <div className="task-input task-status">
                    <Typography variant='h4'>Status</Typography>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Choose Status</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple={false}
                            value={statusLisT}
                            onChange={hadleChangeStatus}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {dataReturnHook.statusList.map((name) => (
                                <MenuItem key={name.statusId} value={name.statusId}>
                                    <ListItemText primary={name.statusName} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="task-input task-type-priority">
                    <div className="task-priority">
                        <Typography variant='h4'>Priority</Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Choose Priority</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple={false}
                                value={priorityLisT}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {dataReturnHook.priorityList.map((name) => (
                                    <MenuItem key={name.priorityId} value={name.priorityId}>
                                        <ListItemText primary={name.priority} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="task-type">
                        <Typography variant='h4'>Task type</Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Choose Type</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple={false}
                                value={typeList}
                                onChange={handleChangeType}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {dataReturnHook.taskTypeList.map((name) => (
                                    <MenuItem key={name.id} value={name.id}>
                                        <ListItemText primary={name.taskType} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className="task-input task-assign-slider">
                    <div className="task-assign-member">
                        <Typography variant='h4'>Assigness</Typography>

                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                            <Select
                                labelId="demo-multiple-chip-label"
                                id="demo-multiple-chip"
                                multiple
                                value={personName}
                                onChange={handleChangeChip}
                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                renderValue={(selected) => (
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                        {selected?.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {memberList.map((item) => (
                                    <MenuItem
                                        key={item.userId}
                                        value={item.name}
                                        style={getStyles(item.name, personName, theme)}
                                        onClick={() => { handleSetList(item) }}
                                    >
                                        {item.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                    </div>
                    <div className="task-slider">
                        <Typography variant='h4'>Time tracking</Typography>
                        <Slider defaultValue={50} max={60} aria-label="Default" valueLabelDisplay="auto" />
                        <div className="slider-status">
                            <Typography variant='h4'>0h logged</Typography>
                            <Typography variant='h4'>0h remaining</Typography>
                        </div>
                    </div>
                </div>
                <div className="task-input task-time-estimate">
                    <div className="task-original-estimate">
                        <Typography variant='h4'>Original Estimate</Typography>
                        <input type="number" {...formik.getFieldProps("originalEstimate")} />
                        <Typography variant='h6' color={'red'}>{formik.errors.originalEstimate}</Typography>
                    </div>
                    <div className="time-spent">
                        <Typography variant='h4'>Time Spent</Typography>
                        <input type="number" {...formik.getFieldProps("timeTrackingSpent")} />
                        <Typography variant='h6' color={'red'}>{formik.errors.timeTrackingSpent}</Typography>
                    </div>
                    <div className="time-remaining">
                        <Typography variant='h4'>Time Remaining</Typography>
                        <input type="number" {...formik.getFieldProps("timeTrackingRemaining")} />
                        <Typography variant='h6' color={'red'}>{formik.errors.timeTrackingRemaining}</Typography>
                    </div>
                </div>
                <div className="task-input task-description">
                    <Typography variant='h4'>Description</Typography>
                    <CKEditor
                        editor={ClassicEditor}
                        data="..."
                        onReady={editor => {
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            formik.setFieldValue("description", data);
                            return event
                        }}
                    />
                </div>
            </div>
            <div className="create-task-footer">
                <Button variant='outlined' onClick={()=>{dispatch(setReRender(!isRender))}}>Cancel</Button>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </div>
        </form>
    )
}

export default CreateTask