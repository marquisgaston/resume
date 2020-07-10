import {
    PULL_EXTRA_ITEMS
} from './types';

export function pullExtraItems(results){


    return {
        type: PULL_EXTRA_ITEMS,
        payload: results
    }
}