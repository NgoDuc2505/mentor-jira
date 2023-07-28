//mui ui
import Button from '@mui/material/Button';
//scss
import './sideBarHome.scss'
function SideBarHome() {
  return (
    <div className="side-bar-home">
        <i className="fa-solid fa-bars"></i>
        <Button variant='text'><i className="fa-solid fa-plus"></i> Create task</Button>
        <Button variant='text'><i className="fa-solid fa-magnifying-glass"></i>Search</Button>
    </div>
  )
}

export default SideBarHome