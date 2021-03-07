import useInput from '../../customhook/useInput';
import { useDispatch } from 'react-redux';
import { addNote } from '../../store/actions/noteActions';

const Form = () => {
	const dispatch = useDispatch();

    const [ title, bindTitle, resetTitle ] = useInput();
    const [ content, bindDescription, resetDescription ] = useInput();
	
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addNote({ title, content }));
		resetTitle();
		resetDescription();
	}

    return <div className="section">
		<form onSubmit={handleSubmit}>
			<label htmlFor='title'>Title</label>
			<input id="title" { ...bindTitle } name="title" type="text" />
			<label htmlFor='content'>Content</label>
			<textarea id="content" { ...bindDescription } name="content" ></textarea>
			<input type="submit" value="Add note" />
		</form>
    </div>
}

export default Form
