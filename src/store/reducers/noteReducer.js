const initialState = {
    noteToEdit: {}
};

const noteReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case 'EDIT_NOTE':
        return { ...state, noteToEdit: payload }

    default:
        return state
    }
}

export default noteReducer;