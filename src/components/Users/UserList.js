import { useReducer, useEffect } from 'react';
import UserDetails from './UserDetails';
import UserReducer from './UserReducer';
import getData from '../../utils/api';

const initialState = {
    userIndex: 0,
    users: [],
    isLoading: true,
    error: false
}

export default function UserList() {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    useEffect(() => {
        async function fetchUsers() {
            dispatch({ type: 'FETCH_USERS_REQUEST'});
            try {
                const users = await getData('http://localhost:3001/users');
                dispatch({
                    type: 'FETCH_USERS_SUCCESS',
                    payload: users
                });
            } catch (error) {
                dispatch({
                    type: 'FETCH_USERS_FAILURE',
                    payload: error
                })
            }
        }
        fetchUsers();
    }, [])
    const handleUserSelection = (userIndex) => dispatch({
        type: 'SET_USER',
        payload: userIndex
    })
    const { users, userIndex } = state;
    return (
        <div class='container'>
            <ul className='items-list-nav'>
                {users.map((item,i) => <li key={i} className={i === userIndex ? 'selected' : null}>
                    <button className='btn' onClick={() => handleUserSelection(i)}>{item.name}</button></li>)}
            </ul>
            <UserDetails userDetails={users[userIndex]}/>
        </div>
    )
}