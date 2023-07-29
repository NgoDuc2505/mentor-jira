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
import Checkbox from '@mui/material/Checkbox';
//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//cscc
import './createTask.scss'


function CreateTask() {
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

    const status = [
        'BACKLOG',
        'FOR DEVELOPMENT',
        'IN PROGRESS',
        'DONE',
    ];

    const priorityList = [
        'High',
        'Medium',
        'Low',
    ]

    const taskTypeList = [
        'bug',
        'new task'
    ]

    const assignMemberList = [
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

    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div className="create-task">
            <div className="create-task-header">
                <Typography variant='h3'>Create Task</Typography>
            </div>
            <hr />
            <div className="create-task-body">
                <div className='task-input project-select'>
                    <Typography variant='h4'>Project</Typography>
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
                            {names.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="task-input task-name-input">
                    <Typography variant='h4'>Task name</Typography>
                    <input type="text" />
                </div>
                <div className="task-input task-status">
                    <Typography variant='h4'>Status</Typography>
                    <FormControl sx={{ m: 1, width: 300 }}>
                        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            multiple={false}
                            value={personName}
                            onChange={handleChange}
                            input={<OutlinedInput label="Tag" />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {status.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={personName.indexOf(name) > -1} />
                                    <ListItemText primary={name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <div className="task-input task-type-priority">
                    <div className="task-priority">
                        <Typography variant='h4'>Priority</Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple={false}
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
                    <div className="task-type">
                        <Typography variant='h4'>Task type</Typography>
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                            <Select
                                labelId="demo-multiple-checkbox-label"
                                id="demo-multiple-checkbox"
                                multiple={false}
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Tag" />}
                                renderValue={(selected) => selected.join(', ')}
                                MenuProps={MenuProps}
                            >
                                {taskTypeList.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
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
                            <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
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
                                {assignMemberList.map((name) => (
                                    <MenuItem key={name} value={name}>
                                        <Checkbox checked={personName.indexOf(name) > -1} />
                                        <ListItemText primary={name} />
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <div className="task-slider">
                        <Typography variant='h4'>Time tracking</Typography>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                        <div className="slider-status">
                            <Typography variant='h4'>0h logged</Typography>
                            <Typography variant='h4'>0h remaining</Typography>
                        </div>
                    </div>
                </div>
                <div className="task-input task-time-estimate">
                    <div className="task-original-estimate">
                        <Typography variant='h4'>Original Estimate</Typography>
                        <input type="number" />
                    </div>
                    <div className="time-spent">
                        <Typography variant='h4'>Time Spent</Typography>
                        <input type="number" />
                    </div>
                    <div className="time-remaining">
                        <Typography variant='h4'>Time Remaining</Typography>
                        <input type="number" />
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
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>
            </div>
            <div className="create-task-footer">
                <Button variant='outlined' >Cancel</Button>
                <Button variant='contained' color='primary' >Submit</Button>
            </div>
        </div>
    )
}

export default CreateTask