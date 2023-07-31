//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//scss
import './createProject.scss'
//react
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//store redux
import { RootState, AppDispatch } from '../../redux/store'
import { getCategory } from '../../redux/project-data/projectData'
//const
import { ICategory, regex } from '../../constant/constant'
//formik 
import { useFormik } from 'formik';
import * as Yup from 'yup';
//services
import { axiosWithAuth } from '../../services/services'
//swal
import swal from 'sweetalert';

function CreateProject() {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const [categoryID,setCategoryId] = useState<number>(0)
    const categoryList = useSelector((state: RootState) => state.projectSlice.category)
    useEffect(() => {
        dispatch(getCategory())
    }, [])
    const handleGetCategory = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setCategoryId(Number(e.target.value))
    }

    const formik = useFormik({
        initialValues: {
            projectName: "",
            description: "",
            categoryId: 0
        },
        validationSchema: Yup.object().shape({
            projectName: Yup.string().required('Project name can not be empty!').matches(regex.nameByVietnamese, 'Project name must be valid!'),
            description: Yup.string().required('Description can not be empty!')
        }),
        onSubmit: async (values) => {
            try {
                const setData = {
                    ...values,
                    categoryId: categoryID,
                    alias: values.projectName
                }
                await axiosWithAuth.post('/api/Project/createProjectAuthorize',setData)
                swal("Đã tạo thành công!", {icon: "success"})
                navigate('/')
            } catch (error) {
                console.log(error)
                swal("Vui lòng kiểm tra lại thông tin!", {
                    icon: "error",
                  });
            }
        }
    })
    return (
        <form className='create-project' action="" onSubmit={formik.handleSubmit}>
            <Typography variant="h3" gutterBottom>
                Create Project
            </Typography>
            <div className="project-name">
                <Typography variant="h5" gutterBottom>
                    Name
                </Typography>
                <input type="text" {...formik.getFieldProps('projectName')} placeholder='Project name' className={formik.errors.projectName ? 'red-input' : ''}/>
                <Typography variant='h6' color={'red'}>{formik.errors.projectName}</Typography>
            </div>
            <div className="description-project">
                <Typography variant="h5" gutterBottom>
                    Description
                </Typography>
                <CKEditor
                    editor={ClassicEditor}
                    data="Description..."
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        formik.setFieldValue("description", data);
                        return event
                    }}
                />
            </div>
            <div className="project-type">
                <select name="type-proj" id="proj-type" onChange={handleGetCategory}>
                    {
                        categoryList.map((item: ICategory) => {
                            return (
                                <option key={item.id} value={`${item.id}`}>{item.projectCategoryName}</option>
                            )
                        })
                    }
                </select>
            </div>
            <Button type='submit' variant='outlined' sx={{ width: '19%', fontSize: '1.4rem', fontWeight: 600, padding: '5px 10px' }}>Create Project</Button>
        </form>
    )
}

export default CreateProject