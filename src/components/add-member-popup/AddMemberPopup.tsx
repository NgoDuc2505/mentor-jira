//mui ui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//scss
import './addMemberPopup.scss'

function AddMemberPopup() {
    return (
        <div className="add-member-popup">
            <Typography variant='h4'>Add Member</Typography>
            <hr />
            <div className="add-member-content">
                <input type="text" placeholder='Enter name' />
                <div className="list-range-member">
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>
                    <p>John.F Kennedy</p>

                </div>
                <Button variant='contained'>+</Button>
            </div>
        </div>
    )
}

export default AddMemberPopup