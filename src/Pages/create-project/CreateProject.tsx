//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//scss
import './createProject.scss'

function CreateProject() {
    return (
        <div className="create-project">
            <Typography variant="h3" gutterBottom>
                Create Project
            </Typography>
            <div className="project-name">
                <Typography variant="h5" gutterBottom>
                    Name
                </Typography>
                <input type="text" />
            </div>
            <div className="description-project">
                <Typography variant="h5" gutterBottom>
                    Description
                </Typography>
                <CKEditor
                    editor={ClassicEditor}
                    data="Text here..."
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <div className="project-type">
                <select name="type-proj" id="proj-type">
                    <option value="type1">1</option>
                    <option value="type1">2</option>
                    <option value="type1">3</option>
                </select>
            </div>
            <Button variant='outlined' sx={{width: '19%', fontSize: '1.4rem', fontWeight: 600, padding:'5px 10px'}}>Create Project</Button>
        </div>
    )
}

export default CreateProject