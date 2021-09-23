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
        case 'FETCH_BOOKABLES_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: false,
                bookables: []
            }
        case 'FETCH_BOOKABLES_SUCCESS':
            return {
                ...state,
                isLoading: false,
                bookables: action.payload
            }
        case 'FETCH_BOOKABLES_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}