import { useCallback, useState } from 'react';
import data from '../../static.json';

export default function BookablesList() {
    const group = 'Rooms';
    const { bookables } = data;
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    const [bookableIndex, setBookableIndex] = useState(1);
    const handleBookableSelection = (index) => setBookableIndex(index);
    return (
        <ul className='items-list-nav'>
            {bookablesMatchingGroup.map((item,i) => <li key={i} className={i === bookableIndex ? 'selected' : null}>
                <button className='btn' onClick={() => handleBookableSelection(i)}>{item.title}</button></li>)}
        </ul>
    )
}