import { useCallback, useState } from 'react';
import data from '../../static.json';
import UserDetails from './UserDetails';

export default function UserList() {
    const { users } = data;
    const [userIndex, setUserIndex] = useState(1);
    const handleUserSelection = useCallback((index) => setUserIndex(index), [])
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