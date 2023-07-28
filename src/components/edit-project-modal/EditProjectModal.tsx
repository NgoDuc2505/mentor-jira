//ckeditor
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//mui ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function EditProjectModal() {
    return (
        <div className="edit-project-modal">
            <Typography variant='h3'>Edit Project</Typography>
            <hr />
            <div className="edit-title-project">
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project ID</Typography>
                    <input type="text" />
                </div>
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project Name</Typography>
                    <input type="text" />
                </div>
                <div className="edit-title-project-item">
                    <Typography variant='h4'>Project Category</Typography>
                    <select name="category" id="category">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
            </div>
            <div className="edit-project-desc">
                <Typography variant='h4'>Project Description</Typography>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
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
            <div className="btn-edit-project-group">
            <Button variant='outlined'>Cancel</Button>
            <Button variant='outlined'>Cancel</Button>
            </div>
        </div>
    )
}

export default EditProjectModal