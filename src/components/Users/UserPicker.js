import data from '../../static.json';
import { useState } from 'react';

export default function UserPicker() {
    const { users } = data;
    const [selectedOption, setSelectedOption] = useState(0)
    const handleChange = ({ target }) => {
        const { value } = target;
        setSelectedOption(value);
    }
    return (
        <select
            value={selectedOption}
            onChange={handleChange}
            >
            {users.map(({ name, title }, index) => <option key={index} value={index} >{name}</option>)}
        </select>
    )
}