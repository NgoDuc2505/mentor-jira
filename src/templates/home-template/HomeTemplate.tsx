//components
import SideBarSub from "../../components/side-bar-home-sub/SideBarSub"
import SideBarHome from "../../components/side-bar-home/SideBarHome"
//scss
import './homeTemplate.scss'

import { Suspense } from "react"
import { Outlet } from "react-router-dom"

function HomeTemplate() {
  return (
    <div className='home-template'>
        <SideBarHome/>
        <SideBarSub/>
        <Suspense fallback={<><h1>loading...</h1></>}>
            <Outlet/>
        </Suspense>
    </div>
  )
}

export default HomeTemplate