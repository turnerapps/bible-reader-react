import actions from './actions';

export function ChapterReducers(state, action) {
    switch (action.payload) {
        case actions.Start_Fetching:
            return {...state, is_fetching: true };

        case actions.Fetching_Success:
            return {...state, is_fetching: false, error: null, Chapters: action.payload };

        case actions.Fetching_Failure:
            return {...state, is_fetching: false, error: action.payload };

        case actions.Select_Chapter:
            return {...state, activeChapter: action.payload };
        default:
            return state;
    }
};