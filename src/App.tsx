
import { Fragment, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/home-template/HomeTemplate'
import RegisterTemplate from './templates/Register-template/RegisterTemplate'

//template
const CreateProject = lazy(() => { return import('./Pages/create-project/CreateProject') })
const ProjectManagement = lazy(() => { return import('./Pages/project-management/ProjectManagement') })
const DetailProject = lazy(() => { return import('./Pages/detail-project/DetailProject') })
const Register = lazy(() => { return import('./Pages/Register/Register') })
const Login = lazy(()=>{return import('./Pages/Login/Login')})

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='create-project' element={<CreateProject />}></Route>
            <Route path='' element={<ProjectManagement />}></Route>
            <Route path='detail-project/:detailID' element={<DetailProject />}></Route>
          </Route>
          <Route path='auth' element={<RegisterTemplate />}>
            <Route path='signup' element={<Register />}></Route>
            <Route path='login' element={<Login/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
