import {Action, ACTION_TYPE} from './action';
import {injectable} from 'inversify';
import "reflect-metadata";
import {SearchMultiResponse} from '../service/movie-service';
import {Media} from '../model/media';
import {AppState} from './app-state';

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

                const response: SearchMultiResponse = action.payload;

                return {
                    ...state,
                    loading: false,
                    currentPage: response.page,
                    totalResults: response.total_results,
                    totalPages: response.total_pages,
                    media: {
                        ...state.media,
                        ...response.results.reduce((acc: {[id: string]: Media}, val: Media) =>  {
                            acc[val.id] = val;
                            return acc;
                        }, {})
                    },
                    pages: {
                        ...state.pages,
                        [response.page]: response.results.map(r => r.id)
                    }
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
