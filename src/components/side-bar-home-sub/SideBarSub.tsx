//scss
import './sideBarSub.scss'
//mui ui
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
//react
import {NavLink} from 'react-router-dom'

function SideBarSub() {
    return (
        <div className='side-bar-sub'>
            <div className="avatar-bar-sub">
                <Avatar className='mui-ava' alt="Travis Howard" src="https://tse2.mm.bing.net/th?id=OIP.sHlaxfIHndDgtkr35zWJqgHaEo&pid=Api&P=0&h=180" />
                <div className="info-ava-bar">
                    <p>Cyber Learn</p>
                    <Button variant='text'>Report Bugs</Button>
                </div>
            </div>
            <div className="group-btn-bar-sub">
                <Button variant='text'><i className="fa-regular fa-credit-card"></i>Cyber Board</Button>
                <Button variant='text'><i className="fa-solid fa-gear"></i><NavLink to={'/'}>Project Management</NavLink></Button>
                <Button variant='text'><i className="fa-solid fa-gear"></i> <NavLink to={'/create-project'}>Create Project</NavLink> </Button>
                <hr />
                <Button variant='text'><i className="fa-solid fa-truck"></i>Releases</Button>
                <Button variant='text'><i className="fa-solid fa-filter"></i>Issue and Filter</Button>
                <Button variant='text'><i className="fa-regular fa-file"></i>Pages</Button>
                <Button variant='text'><i className="fa-solid fa-paper-plane"></i>Reports</Button>
                <Button variant='text'><i className="fa-solid fa-layer-group"></i>Components</Button>
            </div>
        </div>
    )
}

export default SideBarSub