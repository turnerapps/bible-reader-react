import actions from './actions';
import { BookReducers } from './Book/reducers';

export function BibleReducers(state, action) {
    switch (action.type) {
        case actions.Start_Fetching:
            return {...state, is_fetching: true };
        case actions.Fetching_Success:
            return {...state, is_fetching: false, error: null, Bibles: [...action.payload] };
        case actions.Fetching_Failure:
            return {...state, is_fetching: false, error: action.payload };
        case actions.Select_Bible:
            return {...state, activeBible: action.payload };
        default:
            // don't bother drilling down if a Bible isn't selected.
            return state.activeBible ? {...state, activeBible: {...state.activeBible, Books: BookReducers(state.activeBible, action) } } : state;
    }
}