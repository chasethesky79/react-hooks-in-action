import data from '../../static.json';
import { useEffect, useState } from 'react';

export default function BookableDetails({ bookable }) {
    const { sessions, days } = data;
    const [showDetails, setShowDetails] = useState(false);
    useEffect(() => setShowDetails(false), [bookable]);    
    return (
        <div className='bookable-details-section'>
            <div className='bookable-details-header'>
                <h3>{bookable.title}</h3>
                <span><label><input type='checkbox' checked={showDetails} onChange={() => setShowDetails(showDetails => !showDetails)}/>Show Details</label></span>
            </div>
            {showDetails && 
                <div className='bookable-details-body'>
                <h3>{bookable.notes}</h3>
                <h3>Availability</h3>
                <div className='bookable-details-info'>
                <ul>
                    {bookable.days.sort().map(day => <li key={day}>{days[day]}</li>)}
                </ul>
                <ul>
                    {bookable.sessions.sort().map(session => <li key={session}>{sessions[session]}</li>)}
                </ul>               
                </div>
            </div>}
        </div>
    )
}