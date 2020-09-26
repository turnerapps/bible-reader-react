import actions from './actions';
import { ChapterReducers } from './Chapter/reducers';

export function BookReducers(state, action) {
    switch (action.type) {
        case actions.Start_Fetching:
            return {...state, is_fetching: true };
        case actions.Fetching_Success:
            return {...state, is_fetching: false, error: null, Books: [...action.payload] };
        case actions.Fetching_Failure:
            return {...state, is_fetching: false, error: action.payload };
        case actions.Select_Book:
            return {...state, activeBook: action.payload };
        default:
            // don't bother drilling down if a Book isn't selected.
            return state.activeBook ? {...state, activeBook: {...state.activeBook, Books: ChapterReducers(state.activeBook, action) } } : state;
    }
};