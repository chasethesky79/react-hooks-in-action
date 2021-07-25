import { useState } from 'react';

export default function UserDetails({ userDetails }) {
    const [showDetails, setShowDetails] = useState(true);
    return (
        <div class='bookable-details-section'>
            <div className='bookable-details-header'>
                <h3>{userDetails.name}</h3>
                <span><label><input type='checkbox' checked={showDetails} onChange={() => setShowDetails(!showDetails)}/>Show Details</label></span>
            </div>
            {showDetails && 
                <div className='bookable-details-body'>
                    <h3>{userDetails.title}</h3>
                    <h3>{userDetails.notes}</h3>
                </div>}
        </div>
    )
}