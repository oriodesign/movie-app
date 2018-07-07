import {Action, ACTION_TYPE} from './action';
import {AppState} from './store';
import {injectable} from 'inversify';
import "reflect-metadata";

@injectable()
export class Reducer {
    public reduce = ([action, state]: [Action, AppState]): AppState => {
        switch(action.type) {
            case ACTION_TYPE.CHANGE_QUERY:
                return {
                    ...state,
                    q: action.payload
                };
            case ACTION_TYPE.SEARCH_START:
                return {
                    ...state,
                    loading: true
                };
            case ACTION_TYPE.SEARCH_END:
                return {
                    ...state,
                    loading: false
                };
            case ACTION_TYPE.SEARCH_ERROR:
                return {
                    ...state,
                    loading: false
                };
            default:
                return state;
        }
    }
}
