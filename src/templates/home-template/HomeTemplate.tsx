//components
import SideBarSub from "../../components/side-bar-home-sub/SideBarSub"
import SideBarHome from "../../components/side-bar-home/SideBarHome"
import WelcomePage from "../../Pages/welcome-page/WelcomePage"
//scss
import './homeTemplate.scss'
//const
import { ACCESS_TOKEN } from '../../constant/constant'
//util
import { getLocal } from '../../utils/index'


import { Suspense } from "react"
import { Outlet } from "react-router-dom"

function HomeTemplate() {
  return (
    <div className='home-template'>
      {getLocal(ACCESS_TOKEN)
        ? (<>
          <SideBarHome />
          <SideBarSub />
          <Suspense fallback={<><h1>loading...</h1></>}>
            <Outlet />
          </Suspense>
        </>)
        : (<><WelcomePage/></>)}
    </div>
  )
}

export default HomeTemplate