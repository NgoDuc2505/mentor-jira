//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Avatar from '@mui/material/Avatar';
//scss
import './editTask.scss'
//const
import { IListTaskDetail, MenuProps, IGetMembers } from '../../constant/constant'
import { useDispatch, useSelector } from 'react-redux';
//redux store
import { RootState, AppDispatch } from '../../redux/store'
//formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
//swal
import swal from 'sweetalert';
//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//services
import { axiosWithAuth } from '../../services/services'
//redux slice
import {setReRender} from '../../redux/members-data/membersSlice'
import { getProjectById } from '../../redux/project-data/projectData'


interface IProps {
  curentTask: IListTaskDetail
}

function EditTask({ curentTask }: IProps) {
  const dispatch = useDispatch<AppDispatch>()

  
  const assignListName = curentTask.assigness.map((item) => { return item.name })
  const assignListId = curentTask.assigness.map((item) => { return item.id })
  const assignListAvatar = curentTask.assigness.map((item) => { return item.avatar })
  
  
  const isRender = useSelector((state:RootState)=> state.membersSlice.rerenderShowModal)
  const listOfPriority = useSelector((state: RootState) => state.taskSlice.priorityList)
  const listOfTasktype = useSelector((state: RootState) => state.taskSlice.taskTypeList)
  const statusListOfType = useSelector((state: RootState) => state.taskSlice.statusList)
  const memberList = useSelector((state: RootState) => state.projectSlice.currentProject.members)

  const [idMemAdd, setIdMemAdd] = React.useState<number[]>(assignListId)
  const [avatarList, setAvatarList] = React.useState<string[]>(assignListAvatar)
  const [personName, setPersonName] = React.useState<string[]>(assignListName);
  const [idStatus,setIdStatus] = React.useState<string>(curentTask.statusId);
  const [idPriority,setIdPriority] = React.useState<number>(curentTask.priorityTask.priorityId);
  const [idTypeTask,setIdTypeTask] = React.useState<number>(curentTask.taskTypeDetail.id);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
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
      setAvatarList([...avatarList, item.avatar])
    } else {
      idMemAdd.splice(indexDuplicate, 1)
      setIdMemAdd([...idMemAdd])
      avatarList.splice(indexDuplicate, 1)
      setAvatarList([...avatarList])
    }
  }

  const handleChangeStatus = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setIdStatus(e.target.value)
  }

  const handleChangePriority = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setIdPriority(Number(e.target.value))
  }

  const handleChangeTasktype = (e:React.ChangeEvent<HTMLSelectElement>)=>{
    setIdTypeTask(Number(e.target.value))
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      description: curentTask.description,
      timeTrackingSpent: curentTask.timeTrackingSpen,
      timeTrackingRemaining: curentTask.timeTrackingRemaining,

    },
    validationSchema: Yup.object().shape({
      timeTrackingSpent: Yup.number().required('This field have to be filled'),
      timeTrackingRemaining: Yup.number().required('This field have to be filled'),
      description: Yup.string().required("This field have to be filled")
    }),
    onSubmit: async (value) => {
      try {
        const dataAPIPost = {
          listUserAsign: idMemAdd,
          taskId: String(curentTask.taskId),
          taskName: curentTask.taskName,
          description: value.description,
          statusId: idStatus,
          originalEstimate: curentTask.originalEstimate,
          timeTrackingSpent: value.timeTrackingSpent,
          timeTrackingRemaining: value.timeTrackingRemaining,
          projectId: curentTask.projectId,
          typeId: idTypeTask,
          priorityId: idPriority
        }
        await axiosWithAuth.post('/api/Project/updateTask', dataAPIPost)
        dispatch(setReRender(!isRender))
        dispatch(getProjectById(curentTask.projectId))
        swal("Thành công!", {icon: "success"})
        
      } catch (error) {
        console.log(error)
        swal("Bạn không phải người khởi tạo dự án này để có thể chỉnh sửa!", {icon: "error"})
      }
    }
  })
  return (
    <form action="" className="edit-task" onSubmit={formik.handleSubmit}>
      <div className="edit-task-left">
        <div className="edit-task-left-header">
          <i className="fa-solid fa-bookmark"></i>

          <select name="task-type-list" className='task-type-list' onChange={handleChangeTasktype}>
            {listOfTasktype.map((item) => {
              return (<option value={item.id} key={item.id} selected={curentTask.taskTypeDetail.taskType === item.taskType}>{item.taskType}</option>)
            })}

          </select>

          <Typography variant='h5'>{curentTask.taskId}</Typography>
        </div>
        <div className="edit-task-left-content-title">
          <Typography variant='h4'>{`This is an issue of type: ${curentTask.taskName}`}</Typography>
          <Typography variant='h5'>Description:</Typography>

          <CKEditor
            editor={ClassicEditor}
            data={formik.values.description}
            onReady={editor => {
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              formik.setFieldValue("description", data);
              return event
            }}
          />

          <Typography variant='h6' color={'red'}>{formik.errors.description}</Typography>
        </div>
        <div className="edit-task-left-content-comment">
          <Typography variant='h3'>Comment</Typography>
          <div className="comment-list-of-task">
            <div className="comment-task-area">
              <Avatar>D</Avatar>
              <div className="task-comment-input">
                <input type="text" placeholder='Add comment' />
                <div className="action-comment-task">
                  <Button variant='text' >edit</Button>
                  <Button variant='text' >cancel</Button>
                </div>
              </div>
            </div>
            <div className="task-comment-show">
              <Avatar>D</Avatar>
              <div className="task-comment-detail">
                <Typography variant='h6'>Duc - a month ago</Typography>
                <Typography variant='h5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta facilis placeat debitis.</Typography>
                <div className="action-comment-task">
                  <Button variant='text' >edit</Button>
                  <Button variant='text' >delete</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="edit-task-right">
        <div className="edit-task-right-header">
          <Button><i className="fa-solid fa-paper-plane"></i>Send Feedback</Button>
          <Button><i className="fa-solid fa-link"></i>Copy link</Button>
        </div>
        <div className="edit-task-right-content">
          <div className="edit-task-right-item edit-task-component">
            <Typography variant='h4'>Status</Typography>

            <select name="status-task-edit" className='priority-task-edit' onChange={handleChangeStatus}>
              {statusListOfType.map((item, index: number) => {
                return (<option key={index} value={item.statusId} selected={curentTask.statusId === (item.statusId)}>{item.statusName}</option>)
              })}
            </select>

          </div>
          <div className="edit-task-right-item edit-task-component-assign">
            <Typography variant='h4'>Assignment</Typography>
            <div className="edit-task-component-assign-detail">
              <div className="ava-edit-task-component-assign">
                {avatarList.map((member, index) => {
                  return (<Avatar key={index} src={member}></Avatar>)
                })}
              </div>

              <FormControl sx={{ m: 1, width: 300 }}>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                  MenuProps={MenuProps}
                >
                  {memberList.map((name) => (
                    <MenuItem key={name.userId} value={name.name} onClick={() => { handleSetList(name) }}>
                      <ListItemText primary={name.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="edit-task-right-item edit-task-right-priority">
            <Typography variant='h4'>Priority</Typography>

            <select name="priority-task-edit" className='priority-task-edit' onChange={handleChangePriority}>
              {listOfPriority.map((item) => {
                return (<option value={item.priorityId} key={item.priorityId} selected={curentTask.priorityTask.priority === item.priority}>{item.priority}</option>)
              })}
            </select>

          </div>
          <div className="edit-task-right-item edit-task-right-estimate">
            <Typography variant='h4'>Estimate time</Typography>
            <input type="text" value={curentTask.originalEstimate} disabled />
          </div>
          <div className="edit-task-right-item edit-task-right-time-tracking">
            <Typography variant='h4'>Time tracking</Typography>
            <Slider disabled defaultValue={curentTask.timeTrackingRemaining} max={curentTask.originalEstimate} aria-label="Disabled slider" />
            <div className="edit-task-right-time-tracking-input">
              <div className="time-status">
                <Typography variant='h5'>{`Time remaining: ${curentTask.timeTrackingRemaining === undefined ? 0 : curentTask.timeTrackingRemaining}h`}</Typography>
                <input type="number" {...formik.getFieldProps("timeTrackingRemaining")} />
                <Typography variant='h6' color={'red'}>{formik.errors.timeTrackingRemaining}</Typography>
              </div>
              <div className="time-status">
                <Typography variant='h5'>{`Time spent: ${curentTask.timeTrackingSpen === undefined ? 0 : curentTask.timeTrackingSpen}h`}</Typography>
                <input type="number" {...formik.getFieldProps("timeTrackingSpent")} />
                <Typography variant='h6' color={'red'}>{formik.errors.timeTrackingSpent}</Typography>
              </div>

            </div>
            <div className="edit-task-right-footer">
              <Typography variant='h5'>Created a month ago</Typography>
              <Typography variant='h5'>Updated a few seconds ago</Typography>
            </div>
          </div>
        </div>
        <div className="button-group-edit-task">
          <Button variant='contained' color='warning' onClick={()=>{dispatch(setReRender(!isRender))}}>Cancel</Button>
          <Button variant='contained' color='primary' type='submit'>Submit</Button>
        </div>
      </div>
    </form>
  )
}

export default EditTask