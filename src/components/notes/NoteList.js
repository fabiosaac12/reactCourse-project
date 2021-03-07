import Note from './Note';
import '../../styles/notes.scss';

const NoteList = ({ notes, colmd=6, colsm=12 }) => {
    return <div className="container">
        <div className="row notelist justify-content-center">
            {notes && notes.map((note, i) => <Note note={note} key={i} colmd={colmd} colsm={colsm} />) }
        </div>
    </div> 
}

export default NoteList;
