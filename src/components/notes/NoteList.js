import Note from './Note';
import '../../styles/notes.scss';

const NoteList = ({ notes, col=6 }) => {
    return <div className="container">
        <div className="row notelist justify-content-center">
            {notes && notes.map((note, i) => <Note note={note} key={i} col={col} />) }
        </div>
    </div> 
}

export default NoteList;