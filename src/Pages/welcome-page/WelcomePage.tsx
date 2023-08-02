//react
import { NavLink } from "react-router-dom"
//scss
import './welcomePage.scss'

function WelcomePage() {
    return (
        <div className="welcome-page">
            <div className="welcome-page-content">
                <h1>Jira Cyber Clone</h1>
                <NavLink to={'/auth/login'}>{'Go to login'}</NavLink>
            </div>
        </div>
    )
}

export default WelcomePage