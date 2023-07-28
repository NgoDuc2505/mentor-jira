
import { Fragment, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/home-template/HomeTemplate'
//template
const CreateProject = lazy(()=>{return import('./Pages/create-project/CreateProject')})
const ProjectManagement = lazy(()=>{return import('./Pages/project-management/ProjectManagement')})

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='create-project' element={<CreateProject/>}></Route>
            <Route path='' element={<ProjectManagement/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
