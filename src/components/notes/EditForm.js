import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import useInput from '../../customhook/useInput';
import { editNote } from '../../store/actions/noteActions';

const EditForm = () => {
	const dispatch = useDispatch();
    const history = useHistory();
    const { title, content, id } = useSelector(state => state.note.noteToEdit);

    const [ newTitle, bindTitle ] = useInput(title);
    const [ newContent, bindDescription ] = useInput(content);
	
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(editNote(id, newTitle, newContent));
        history.push('/');
	}

    return <div className="container">
		<form onSubmit={handleSubmit}>
			<label htmlFor='title'>Title</label>
			<input id="title" { ...bindTitle } name="title" type="text" />
			<label htmlFor='content'>Content</label>
			<textarea id="content" { ...bindDescription } name="content" ></textarea>
			<input type="submit" value="Add note" />
		</form>
    </div>
}

export default EditForm;
