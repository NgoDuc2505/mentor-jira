//react
import { Suspense }  from 'react'
import { Outlet } from 'react-router-dom'
//css
import './registerTemplate.scss'



function RegisterTemplate() {

  return (
    <div className='register-template'>
      <div className="left-content">
        <img src="https://picsum.photos/1200/900" alt="..." />
      </div>
      <div className="right-content">
        <Suspense fallback={<><h1>Loading...</h1></>}>
          <Outlet/>
        </Suspense>
      </div>
    </div>
  )
}

export default RegisterTemplate