//react
import { NavLink, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
//Mui ui
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import Button from '@mui/material/Button';
import '../Login/login.scss'
//formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
//const
import { regex, IValues, CYBER_TOKEN, BASE_URL } from '../../constant/constant'
//swal
import swal from 'sweetalert';
//services
// import { axiosInterceptorWithCybertoken } from '../../services/services'
import axios from 'axios';


function Register() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
      name: "",
      phoneNumber: ""
    },
    validationSchema: Yup.object().shape({
      passWord: Yup.string().required('Password can not be empty').min(6, 'Min is 6 characters').max(12, 'Max is 12 characters').matches(regex.password, 'password must contain at least 1 digit, 1 special character, 1 alphabeltic character !'),
      name: Yup.string().matches(regex.nameByVietnamese, 'Name has to be valid').required('Name can not be empty'),
      email: Yup.string().email('This field has to be email').required('Email can not be empty'),
      phoneNumber: Yup.number().required('Phone can not be empty')
    }),
    onSubmit: async (values: IValues) => {
      try {
          await axios({
            method:'post',
            url:`${BASE_URL}/api/Users/signup`,
            headers: {
              TokenCybersoft: CYBER_TOKEN
            },
            data: values
          })
          swal("Đã đăng ký thành công!", {icon: "success"})
          navigate('/auth/login')
        }
       catch (error) {
        console.log(error)
        swal("Thất bại, email đã được dùng!", {
          icon: "error",
        });
      }

    }
  })

  return (
    <div className='register-page'>
      <div className="login-page-title">
        <i className="fa-solid fa-fingerprint"></i>
        <h1>Đăng ký</h1>
      </div>
      <form action="" className='login-form' onSubmit={formik.handleSubmit}>
        <FormControl variant='standard' className='mui-form-control' margin='dense' error={formik.errors.passWord ? true : false}>
          <InputLabel htmlFor="my-input-password">Mật khẩu</InputLabel>
          <Input id="my-input-password" aria-describedby="my-helper-text" {...formik.getFieldProps('passWord')} />
          {formik.touched.passWord && formik.errors.passWord ? <FormHelperText id="my-helper-text">{formik.errors.passWord}</FormHelperText> : <></>}
        </FormControl>
        <FormControl variant='standard' className='mui-form-control' margin='dense' error={formik.errors.name ? true : false}>
          <InputLabel htmlFor="my-input-name">Họ tên</InputLabel>
          <Input id="my-input-name" aria-describedby="my-helper-text" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? <FormHelperText id="my-helper-text">{formik.errors.name}</FormHelperText> : <></>}
        </FormControl>
        <FormControl variant='standard' className='mui-form-control' margin='dense' error={formik.errors.email ? true : false}>
          <InputLabel htmlFor="my-input-email">Email</InputLabel>
          <Input id="my-input-email" aria-describedby="my-helper-text" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email ? <FormHelperText id="my-helper-text">{formik.errors.email}</FormHelperText> : <></>}
        </FormControl>
        <FormControl variant='standard' className='mui-form-control' margin='dense' error={formik.errors.phoneNumber ? true : false}>
          <InputLabel htmlFor="my-input-phone">Số điện thoại</InputLabel>
          <Input id="my-input-phone" aria-describedby="my-helper-text" {...formik.getFieldProps('phoneNumber')} />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? <FormHelperText id="my-helper-text">{formik.errors.phoneNumber}</FormHelperText> : <></>}
        </FormControl>
        <div className="form-button-group">
          <Button variant="outlined" type='submit'>Đăng ký</Button>
          <Button variant="outlined" className='register-navigate-button'>
            <NavLink to={'/auth/login'}>Đăng nhập</NavLink>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Register