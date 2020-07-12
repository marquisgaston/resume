import {
    SET_CURRENT_PAGE,
    SET_SEARCH_TERM
} from '../actions/types';

const INITAIL_STATE = {
    currentPage: null,
    searchTerm: null,
    postUrl: "https://api.dailysmarty.com/posts"
}

export default function (state = INITAIL_STATE, actions) {
    switch(actions.type){
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: actions.payload
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: actions.payload
            }
        default: return state
    }
}