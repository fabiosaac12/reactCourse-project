import Form from './Form';
import '../../styles/home.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '..//notes/NoteList';

const Home = () => {
    useFirestoreConnect([{ 
        collection: 'notes', 
        orderBy: ['createdAt', 'desc'] 
    }]);
    const notes = useSelector(state => state.firestore.ordered.notes);

    return <div className="container">
        <div className="row">
            <div className="col-md-4">
                <Form />
            </div>
            <div className="col-md-8">
                <NoteList notes={notes} />
            </div>
        </div>
    </div>
}

export default Home
