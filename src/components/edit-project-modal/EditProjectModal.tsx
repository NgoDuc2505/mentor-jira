//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//scss
import './editProjectModal.scss'
//formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
//react
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
//store
import { RootState, AppDispatch } from '../../redux/store'
//const
import { regex, ICategory, CYBER_TOKEN, ACCESS_TOKEN } from '../../constant/constant'
//axios
import axios from 'axios';
//utils
import { getLocal } from '../../utils/index'
//swal
import swal from 'sweetalert';
//redux slice
import {getListProject} from '../../redux/project-data/projectData'


interface IProps {
    creatorId: number
}

function EditProjectModal({creatorId}:IProps) {
    const dispatch = useDispatch<AppDispatch>()
    const { id, projectName, description, projectCategory } = useSelector((state: RootState) => state.projectSlice.currentProject)
    const [categoryID, setCategoryId] = useState<number>(0)

    const handleGetCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryId(Number(e.target.value))
    }
    const categoryList = useSelector((state: RootState) => state.projectSlice.category)
    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
            projectName: projectName,
            projectCategory: projectCategory.id,
            description: description
        },
        validationSchema: Yup.object().shape({
            projectName: Yup.string().required('Project name can not be empty!').matches(regex.nameByVietnamese, 'Project name must be valid!'),
            description: Yup.string().required('Description can not be empty!')
        }),
        onSubmit: async (values) => {
            try {
                const projectUpdate = {
                    id: -1,
                    projectName: values.projectName,
                    creator: creatorId,
                    description: values.description,
                    categoryId: String(categoryID)
                }
                await axios({
                    url:`https://jiranew.cybersoft.edu.vn/api/Project/updateProject?projectId=${id}`,
                    method: 'put',
                    data:projectUpdate,
                    headers:{
                        TokenCybersoft : CYBER_TOKEN,
                        Authorization : `Bearer ${getLocal(ACCESS_TOKEN)}`
                    }
                })
                dispatch(getListProject())
                swal("Thành công!", {icon: "success"})
            } catch (error) {
                console.log(error)
                swal("Bạn không phải người khởi tạo dự án này để có thể chỉnh sửa!", {icon: "error"})
            }
        }
    })
    return (
        <form action="" className="edit-project-modal" onSubmit={formik.handleSubmit}>
            <Typography variant='h3'>Edit Project</Typography>
            <hr />
            <div className="edit-title-project">
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project ID</Typography>
                    <input type="text" value={id} disabled />
                </div>
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project Name</Typography>
                    <input type="text" {...formik.getFieldProps("projectName")}/>
                    <Typography variant='h6' color={'red'}>{formik.errors.projectName}</Typography>
                </div>
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project Category</Typography>
                    <select name="category" id="category" onChange={handleGetCategory}>
                        {
                            categoryList.map((item: ICategory) => {
                                return (
                                    <option key={item.id} value={`${item.id}`} selected={item.id === projectCategory.id}>{item.projectCategoryName}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div>
            <div className="edit-project-desc">
                <Typography variant='h4'>Project Description</Typography>
                <CKEditor
                    editor={ClassicEditor}
                    data={formik.values.description}
                    onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        formik.setFieldValue("description", data);
                        return event
                    }}
                />
            </div>
            <div className="btn-edit-project-group">
                <Button variant='contained' color='error'>Cancel</Button>
                <Button variant='contained' color='primary' type='submit'>Submit</Button>
            </div>
        </form>
    )
}

export default EditProjectModal