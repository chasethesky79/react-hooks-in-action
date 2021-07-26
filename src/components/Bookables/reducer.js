export default function reducer(state, action) {
    switch(action.type) {
        case 'SET_GROUP':
            return {
                ...state,
                group: action.payload,
                bookableIndex: 0
            }
        case 'SET_BOOKABLE':
            return {
                ...state,
                bookableIndex: action.payload
            }
        case 'NEXT_BOOKABLE':
            const count = state.bookables.filter(bookable => bookable.group === state.group).length;
            return {
                ...state,
                bookableIndex: (state.bookableIndex + 1) % count
            }
        case 'TOGGLE_SHOW_DETAILS':
            return {
                ...state,
                showDetails: !state.showDetails
            }
        default:
            return state;
    }
}