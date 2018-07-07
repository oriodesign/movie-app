import {SearchMultiResponse} from '../service/movie-service';

export interface Action {
    type: string;
    payload: any;
}

export const ACTION_TYPE = {
    CHANGE_QUERY: 'Change Query',
    SEARCH_START: 'Search start',
    SEARCH_END: 'Search end',
    SEARCH_ERROR: 'Search error'
};

export class ChangeQueryAction implements Action {
    public type = ACTION_TYPE.CHANGE_QUERY;
    constructor(
        public payload: string
    ) {}
}

export class SearchStart implements Action {
    public type = ACTION_TYPE.SEARCH_START;
    constructor(
        public payload: string
    ) {}
}

export class SearchEnd implements Action {
    public type = ACTION_TYPE.SEARCH_END;
    constructor(
        public payload: SearchMultiResponse
    ) {}
}

export class SearchError implements Action {
    public type = ACTION_TYPE.SEARCH_ERROR;
    constructor(
        public payload: any
    ) {}
}
