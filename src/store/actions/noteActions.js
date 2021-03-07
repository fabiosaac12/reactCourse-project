export const addNote = ( note ) => async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
        await firestore.collection('notes').add({ ...note, favorite: false, createdAt: new Date() });
        console.log('added');
    } catch(e) { console.log(e) }
}

export const deleteNote = ( id ) => async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
        await firestore.collection('notes').doc(id).delete()
        console.log('deleted');
    } catch(e) { console.log(e) }
}

export const toggleFavNote = ( id, favorite ) => async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const nextFavorite = !favorite
    try {
        await firestore.collection('notes').doc(id).update({ favorite: nextFavorite })
        console.log('updated');
    } catch(e) { console.log(e) }
}

export const editNote = ( id, title, content ) => async (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    try {
        await firestore.collection('notes').doc(id).update({ title, content });
        console.log('updated');
    } catch(e) { console.log(e) }
}