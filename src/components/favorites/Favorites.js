import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import NoteList from '../notes/NoteList';

const Favorites= () => {
    useFirestoreConnect([{ 
        collection: 'notes', 
        where: ['favorite', '==', true], 
        orderBy: ['createdAt', 'desc'], 
        storeAs: 'favNotes' 
    }]);
    
    const favNotes = useSelector(state => state.firestore.ordered.favNotes);

    return <div>
        <NoteList notes={favNotes} colmd={3} colsm={6} />
    </div>
}

export default Favorites
