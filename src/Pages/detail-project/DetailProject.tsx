//mui ui
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
//react
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
//scss
import './detailProject.scss'
//components
import CreateTask from '../../components/create-task/CreateTask';
import EditTask from '../../components/edit-task/EditTask';
//custom hook
import useGetAPITask, { useGetAPIDetail, useGetDataDependOnParams } from './detailProject.handle'
//const
import {  IListTaskDetail } from '../../constant/constant'


function DetailProject() {
  const idNum = useParams()
  const idNumCustom = Number(idNum.detailID)
  useGetAPITask(idNumCustom)
  const {currentProject,profile,isRender} = useGetAPIDetail()
  useGetDataDependOnParams(idNum.detailID,idNumCustom)

  useEffect(() => {
    setOpenModal(false)
  }, [isRender])

  const [openModal, setOpenModal] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEditTask = () => {
    setOpenEdit(true)
  }

  return (
    <div className="detail-project">
      <div className="header-detail-project">
        <Typography variant='h5'>{`Project / ${profile?.name} / Project Management / ${currentProject.projectName}`}</Typography>
        <Typography variant='h3' sx={{ marginTop: '2rem' }}>{currentProject.projectName}</Typography>
        <Typography variant='h6' sx={{ marginTop: '1rem' }}>{profile?.name}</Typography>
      </div>
      <div className="status-detail-project">
        <div className="search-task">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" />
        </div>
        <div className="group-ava-detail">
          {currentProject.members.map((item) => {
            return (<Avatar key={item.userId} sx={{ width: '3rem', height: '3rem' }} src={item.avatar}></Avatar>)
          })}
        </div>
        <Typography variant='h6'>Only my issue</Typography>
        <Typography variant='h6'>Recently uploaded</Typography>
        <Button variant='contained' color='info' onClick={() => { setOpenModal(true) }}>New Task</Button>
      </div>

      <div className="task-tracking">

        {/*-------------------------------render 4 types of task-------------------------------------*/}

        {currentProject.lstTask.map((item) => {
          return (
            <div className="track-item" key={item.statusId}>
              <Typography variant='h6' sx={{ marginLeft: '1rem' }}>{item.statusName}</Typography>
              <div className="track-task-list">

                {/*-------------------------------render each tasks of task' s type-------------------------------------*/}

                {item.lstTaskDeTail.map((tasks: IListTaskDetail) => {
                  return (
                    <div className="task-item-detail" onClick={handleOpenEditTask} key={tasks.taskId}>
                      <Typography variant='h6'>{tasks.taskName}</Typography>
                      <div className="task-status">
                        <Typography variant='h6' color={'red'}>{tasks.priorityTask.priority}</Typography>
                        <div className="task-members">

                          {/*-------------------------------render each each members that is in task-------------------------------------*/}

                          {tasks.assigness.map((members) => {
                            return (<Avatar key={members.id} sx={{ width: '3rem', height: '3rem' }} src={members.avatar}></Avatar>)
                          })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <Modal
        open={openModal}
        onClose={() => { setOpenModal(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateTask idNumCustom={idNumCustom} />
      </Modal>
      <Modal
        open={openEdit}
        onClose={() => { setOpenEdit(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <EditTask />
      </Modal>
    </div>
  )
}

export default DetailProject
