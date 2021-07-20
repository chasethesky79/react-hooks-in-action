import { useState } from 'react';
import data from '../../static.json';
import { FaArrowRight } from 'react-icons/fa';
import BookableDetails from './BookableDetails';

export default function BookablesList() {
    const { bookables } = data;
    const groups = bookables.reduce((acc, element) => {
      if (!acc.includes(element.group)){
          acc = [...acc, element.group]
      }
      return acc;
    }, []);
    const [bookableIndex, setBookableIndex] = useState(1);
    const [group, setGroup] = useState(groups[0]);
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    const handleBookableSelection = (index) => setBookableIndex(index);
    const handleGroupSelection = ({ target: { value }}) => {
        setGroup(value);
        setBookableIndex(0);
    };
    const handleNextSelection = () => setBookableIndex(bookableIndex === bookablesMatchingGroup.length - 1 ? 0 : bookableIndex + 1);
    return (
        <div class="container">
           <div className='bookables-list'>
                <select
                    value={group}
                    onChange={handleGroupSelection}>
                    {groups.map((group, index) => <option key={index} value={group} >{group}</option>)}
                </select>
               <ul className='items-list-nav'>
                    {bookablesMatchingGroup.map((item,i) => <li key={i} className={i === bookableIndex ? 'selected' : null}>
                        <button className='btn' onClick={() => handleBookableSelection(i)}>{item.title}</button></li>)}
                    <button onClick={handleNextSelection} className='nextBtn'><FaArrowRight/><span>&nbsp;Next</span></button>
                </ul>
            </div>
            <BookableDetails bookable={bookablesMatchingGroup[bookableIndex]}/>
        </div>
        
    )
}