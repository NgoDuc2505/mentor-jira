//mui ui
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
//react
import React from 'react';
//scss
import './detailProject.scss'
//components
import CreateTask from '../../components/create-task/CreateTask';


function DetailProject() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <div className="detail-project">
      <div className="header-detail-project">
        <Typography variant='h5'>Project / Cyber Learn / Project Management / Project 123</Typography>
        <Typography variant='h3'>Project 123</Typography>
        <Typography variant='h6' sx={{ marginTop: '1rem' }}>Ngo duc</Typography>
      </div>
      <div className="status-detail-project">
        <div className="search-task">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" />
        </div>
        <div className="group-ava-detail">
          <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
          <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
        </div>
        <Typography variant='h6'>Only my issue</Typography>
        <Typography variant='h6'>Recently uploaded</Typography>
        <Button variant='contained' color='info' onClick={()=>{setOpenModal(true)}}>New Task</Button>
      </div>
      <div className="task-tracking">
        <div className="track-item">
          <Typography variant='h6' sx={{ marginLeft: '1rem' }}>BACKLOG</Typography>
          <div className="track-task-list">
            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="track-item">
          <Typography variant='h6' sx={{ marginLeft: '1rem' }}>FOR DEVEPOMENT</Typography>
          <div className="track-task-list">
            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="track-item">
          <Typography variant='h6' sx={{ marginLeft: '1rem' }}>IN PROGRESS</Typography>
          <div className="track-task-list">
            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="track-item">
          <Typography variant='h6' sx={{ marginLeft: '1rem' }}>DONE</Typography>
          <div className="track-task-list">
            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>

            <div className="task-item-detail">
              <Typography variant='h6'>Task 01</Typography>
              <div className="task-status">
                <Typography variant='h6' color={'red'}>High</Typography>
                <div className="task-members">
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>H</Avatar>
                  <Avatar sx={{ width: '3rem', height: '3rem' }}>t</Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={openModal}
        onClose={()=>{setOpenModal(false)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreateTask/>
      </Modal>
    </div>
  )
}

export default DetailProject
