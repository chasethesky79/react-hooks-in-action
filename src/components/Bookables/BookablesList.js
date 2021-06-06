import { useState } from 'react';
import data from '../../static.json';
import { FaArrowRight } from 'react-icons/fa';

export default function BookablesList() {
    const group = 'Rooms';
    const { bookables } = data;
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    const [bookableIndex, setBookableIndex] = useState(1);
    const handleBookableSelection = (index) => setBookableIndex(index);
    const handleNextSelection = () => setBookableIndex(bookableIndex === bookablesMatchingGroup.length - 1 ? 0 : bookableIndex + 1);
    return (
        <ul className='items-list-nav'>
            {bookablesMatchingGroup.map((item,i) => <li key={i} className={i === bookableIndex ? 'selected' : null}>
                <button className='btn' onClick={() => handleBookableSelection(i)}>{item.title}</button></li>)}
            <button onClick={handleNextSelection} className='nextBtn'><FaArrowRight/><span>&nbsp;Next</span></button>
        </ul>
    )
}