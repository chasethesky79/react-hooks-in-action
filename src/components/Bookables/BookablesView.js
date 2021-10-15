import { useReducer } from 'react';
import BookableDetails from './BookableDetails';
import BookableReducer from './BookableReducer';
import BookablesList from './BookablesList';

export default function BookablesView() {
    const initialState = {
        group: 'Rooms',
        bookableIndex: 0,
        showDetails: true,
        bookables: [],
        isLoading: true,
        error: false
    }
    const [state, dispatch] = useReducer(BookableReducer, initialState);
    const { bookables, group } = state;
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    return (
       <div className='container'>
            <BookablesList state={state} dispatch={dispatch}/>
            {bookablesMatchingGroup.length > 0 && <BookableDetails bookable={bookablesMatchingGroup[state.bookableIndex]}/>}
       </div>
    )
}