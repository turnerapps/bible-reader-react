import { BibleReducer, bibleState } from './Bible';

export const reducer = (state, action) => {
    console.log("Action Type: ", action.type);
    let newState;
    newState = BibleReducer(state, action);
    console.log("INITIAL STATE:", state, "NEXT STATE:", newState);
    return newState;
}

export const initialState = {
    Bible: bibleState
};