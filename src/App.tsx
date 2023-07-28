
import { Fragment, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from './templates/home-template/HomeTemplate'
//template
const CreateProject = lazy(()=>{return import('./Pages/create-project/CreateProject')})

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            <Route path='create-project' element={<CreateProject/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
