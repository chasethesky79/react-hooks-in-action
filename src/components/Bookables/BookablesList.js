import { useState } from 'react';
import data from '../../static.json';
import { FaArrowRight } from 'react-icons/fa';

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
    const handleBookableSelection = (index) => setBookableIndex(index);
    const handleGroupSelection = ({ target: { value }}) => {
        setBookableIndex(0);
        setGroup(value);
    };
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    const handleNextSelection = () => setBookableIndex((index) => index === bookablesMatchingGroup.length - 1 ? 0 : index + 1);
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
            <div class='bookable-details-section'>
                <div class='bookable-details'>
                    <h3>Projector</h3>
                    <span>Show Details</span>
                </div>
            </div>
        </div>
        
    )
}