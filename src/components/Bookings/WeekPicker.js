import { useReducer, useRef } from "react";
import weekReducer from "../weekReducer";
import getWeek from '../../utils/date-wrangler';
import { FaAngleLeft, FaCalendarAlt, FaAngleRight, FaCheck } from 'react-icons/fa';
import TextField from '@mui/material/TextField';

export default function WeekPicker({date}){
    const [week, dispatch] = useReducer(weekReducer, date, getWeek);
    const dateRef = useRef();
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
                <TextField inputRef={dateRef} variant="standard" label="Date"/>
                <button 
                    className='btn'
                    onClick={() => dispatch({ type: 'SET_DATE', payload: new Date(dateRef.current.value) })}                        
                ><FaCheck/><span>Go</span></button>
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