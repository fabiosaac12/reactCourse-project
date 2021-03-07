import { useDispatch } from "react-redux";
import { deleteNote, toggleFavNote } from "../../store/actions/noteActions";
import moment from 'moment';
import { Link } from "react-router-dom";

const Note = ({ note, colmd, colsm }) => {
    const dispatch = useDispatch();

    const { title, content, createdAt, id, favorite } = note; 

    const handleDelete = (e) => dispatch(deleteNote(id)); 

    const handleFavorite = (e) => dispatch(toggleFavNote(id, favorite));

    const handleEdit = (e) => dispatch({ type: 'EDIT_NOTE', payload: note });
    
    return <div className={ `note col-md-${colmd} col-sm-${colsm} text-wrap d-flex flex-column justify-content-center` }>
            <div className="bg">
                <div className="icons d-flex justify-content-end">
                    <i onClick={ handleFavorite } className={ `favorite bi bi-heart${favorite ? '-fill' : ''} m-1` }></i>
                    <i onClick={ handleDelete } className="bi bi-trash-fill m-1"></i>
                </div>
                <div className="info text-center">
                    <Link to={ `/note/${id}` }>
                        <h3 className='title text-break'>{ title }</h3>
                    </Link>
                    <p className='content text-break' >{ content }</p>
                    <span className='date'>{ moment(createdAt.toDate()).fromNow() }</span>
                </div>
                <div className="icons d-flex justify-content-end">
                    <Link to='/edit'><i onClick={ handleEdit } className="bi bi-pencil-fill m-1"></i></Link>
                </div>
            </div>
    </div> 
}

export default Note;
