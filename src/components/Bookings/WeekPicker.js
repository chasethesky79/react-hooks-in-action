import { useReducer } from "react";
import weekReducer from "../weekReducer";
import getWeek from '../../utils/date-wrangler';
import { FaAngleLeft, FaCalendarAlt, FaAngleRight } from 'react-icons/fa';

export default function WeekPicker({date}){
    const [week, dispatch] = useReducer(weekReducer, date, getWeek);
    console.log(`WEEK ${JSON.stringify(week)}`);
    return (
        <>
            <div className='date-picker'>
                <button 
                    className='btn'
                    onClick={() => dispatch({ type: 'GET_PREV_WEEK'})}
                >
                <FaAngleLeft/><span>Prev</span>
                </button>
                <button 
                    className='btn'
                    onClick={() => dispatch({ type: 'GET_CURRENT_WEEK'})}
                >
                <FaCalendarAlt/><span>Today</span>
                </button>
                <button 
                    className='btn'
                    onClick={() => dispatch({ type: 'GET_NEXT_WEEK'})}
                >
                <FaAngleRight/><span>Next</span>
                </button>    
            </div>
            <div className='week-description'>{week.start.toDateString()}-{week.end.toDateString()}</div>
        </>
    )
}