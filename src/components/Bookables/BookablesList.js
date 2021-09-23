import { useReducer, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import BookableDetails from './BookableDetails';
import reducer from '../Bookables/reducer';
import getData from '../../utils/api';
import { FaSpinner } from "react-icons/fa";

const initialState = {
    group: 'Rooms',
    bookableIndex: 0,
    showDetails: true,
    bookables: [],
    isLoading: true,
    error: false
}

export default function BookablesList() {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        async function fetchBookables() {
            dispatch({ type: 'FETCH_BOOKABLES_REQUEST'});
            try {
                const bookables = await getData('http://localhost:3001/bookables');
                dispatch({
                    type: 'FETCH_BOOKABLES_SUCCESS',
                    payload: bookables
                });
            } catch (error) {
                dispatch({
                    type: 'FETCH_BOOKABLES_FAILURE',
                    payload: error
                })
            }
        }
        fetchBookables();
    }, [])
    const { bookables, error, isLoading } = state;
    const groups = bookables.reduce((acc, element) => {
        if (!acc.includes(element.group)){
            acc = [...acc, element.group]
        }
        return acc;
      }, []);
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === state.group);
    const handleBookableSelection = (bookableIndex) => dispatch({
        type: 'SET_BOOKABLE',
        payload: bookableIndex
    })
    const handleGroupSelection = ({ target: { value }}) => dispatch({
        type: 'SET_GROUP',
        payload: value
    })
    const handleNextSelection = () => dispatch({ type: 'NEXT_BOOKABLE' });
    const handleShowDetailsToggled = () => dispatch({ type: 'TOGGLE_SHOW_DETAILS'});
    if (error) {
        return <p>{error.message}</p>
    }
    if (isLoading) {
        return <FaSpinner className='icon-loading'/>
    }
    return (
        <div className="container">
           <div className='bookables-list'>
                <select
                    value={state.group}
                    onChange={handleGroupSelection}>
                    {groups.map((group, index) => <option key={index} value={group} >{group}</option>)}
                </select>
               <ul className='items-list-nav'>
                    {bookablesMatchingGroup.map((item,i) => <li key={i} className={i === state.bookableIndex ? 'selected' : null}>
                        <button className='btn' onClick={() => handleBookableSelection(i)}>{item.title}</button></li>)}
                    <button onClick={handleNextSelection} className='nextBtn'><FaArrowRight/><span>&nbsp;Next</span></button>
                </ul>
            </div>
            <BookableDetails bookable={bookablesMatchingGroup[state.bookableIndex]} showDetails={state.showDetails} handleShowDetailsToggled={handleShowDetailsToggled}/>
        </div>        
    )
}