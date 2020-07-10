import {
    PULL_EXTRA_ITEMS
} from '../actions/types';

const INITIAL_STATE = {
    extraItems: [],
    filteredResumeResults: ["resume results go here"]
}

export default function (state = INITIAL_STATE, actions){
    switch(actions.type){
        case PULL_EXTRA_ITEMS:
            return {
                ...state,
                extraItems: actions.payload
            }

        default: return state
    }
}