import data from '../../static.json';

export default function BookablesPage() {
    const group = 'Rooms';
    const { bookables } = data;
    const bookablesMatchingGroup = bookables.filter(bookable => bookable.group === group);
    const bookableIndex = 1;
    return (
        <ul className='items-list-nav'>
            {bookablesMatchingGroup.map((item,i) => <li key={i} className={i === bookableIndex ? 'selected' : null}>
                <button className='btn'>{item.title}</button></li>)}
        </ul>
    )
}