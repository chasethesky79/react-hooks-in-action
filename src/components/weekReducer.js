import getWeek from "../utils/date-wrangler";

export default function weekReducer(state, action) {
    switch (action?.type) {
        case 'GET_CURRENT_WEEK':
            return getWeek(new Date());
        case 'GET_PREV_WEEK':
            return getWeek(state.date, -7);
        case 'GET_NEXT_WEEK':
            return getWeek(state.date, 7);
        case 'GET_WEEK_FOR_DATE':
        case 'SET_DATE':
            return getWeek(action.payload);
        default:
            return state;
    }
}