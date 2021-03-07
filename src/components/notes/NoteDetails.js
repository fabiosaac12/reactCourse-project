import moment from 'moment';
import { useSelector } from "react-redux"
import { useFirestoreConnect } from "react-redux-firebase"

const NoteDetails = ({ match: {params: {id} } }) => {
    useFirestoreConnect([{
        collection: 'notes',
        doc: id,
        storeAs: 'note'
    }])
    
    const note = useSelector(state => state.firestore.ordered.note);
    
    const { title='', content='', createdAt='' } = note ? note[0] : {};

    return <div className="container noteDetail p-4 d-flex flex-column">
        <div className="info">
            <h2>{ title }</h2>
            <p>{ content }</p>
        </div>
        <div className="date text-end">
            <span>{ createdAt && moment(createdAt.toDate()).fromNow() }</span>
        </div>
    </div>
}

export default NoteDetails
