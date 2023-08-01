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
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
//scss
import './editTask.scss'


function EditTask() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    'bug',
    'new task',
  ];

  const assignList = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const priorityList = [
    'High',
    'Medium',
    'Low'
  ]
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [default1, setDefault1] = React.useState(true)
  
  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    setDefault1(false)
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <div className='edit-task'>
      <div className="edit-task-left">
        <div className="edit-task-left-header">
          <i className="fa-solid fa-bookmark"></i>
          <FormControl sx={{ m: 1, width: 300, margin: '0px' }}>
            <Select
              className='mui-select-custom-edit-task'
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple={false}
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              MenuProps={MenuProps}
              displayEmpty
            >
              {default1 ? <MenuItem value="">Bug (default)</MenuItem> : <></>}
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {/* <Checkbox checked={personName.indexOf(name) > -1}/> */}
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography variant='h5'>Task 01</Typography>
        </div>
        <div className="edit-task-left-content-title">
          <Typography variant='h4'>This is an issue of type: Task</Typography>
          <Typography variant='h5'>Description:</Typography>
          <textarea cols={80} rows={2}></textarea>
        </div>
        <div className="edit-task-left-content-comment">
          <Typography variant='h3'>Comment</Typography>
          <div className="comment-list-of-task">
            <div className="comment-task-area">
              <Avatar>D</Avatar>
              <div className="task-comment-input">
                <input type="text" placeholder='Add comment'/>
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
            <input type="text" value={'200'} disabled />
          </div>
          <div className="edit-task-right-item edit-task-component-assign">
            <Typography variant='h4'>Assignment</Typography>
            <div className="edit-task-component-assign-detail">
              <div className="ava-edit-task-component-assign">
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
                <Avatar>H</Avatar>
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
                  {assignList.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="edit-task-right-item edit-task-right-priority">
            <Typography variant='h4'>Priority</Typography>
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
                {priorityList.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="edit-task-right-item edit-task-right-estimate">
            <Typography variant='h4'>Estimate time</Typography>
            <input type="text" value={'2'} disabled />
          </div>
          <div className="edit-task-right-item edit-task-right-time-tracking">
            <Typography variant='h4'>Time tracking</Typography>
            <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            <div className="edit-task-right-time-tracking-input">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="edit-task-right-footer">
              <Typography variant='h5'>Created a month ago</Typography>
              <Typography variant='h5'>Updated a few seconds ago</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTask