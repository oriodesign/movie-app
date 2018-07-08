import {Reducer} from './reducer';
import {ChangeQueryAction, SearchEnd, SearchError, SearchStart} from './action';
import {SearchMultiResponse} from '../service/movie-service';
import {AppState} from './app-state';

describe('Reducer', () => {
    it('should reduce change query', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new ChangeQueryAction("test"), {} as AppState]);
        expect(result).toEqual({q: "test"});
    });

    it('should reduce request start', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchStart("test"), {} as AppState]);
        expect(result).toEqual({loading: true});
    });

    it('should reduce request end', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchEnd({
            total_pages: 2,
            total_results: 10,
            page: 1,
            results: [
                { id: 1, title: "Kill bill" },
                { id: 2, title: "Pulp Fiction" }
            ]
        } as SearchMultiResponse), {
            q: "test",
        } as AppState]);
        expect(result).toEqual({
            loading: false,
            totalPages: 2,
            totalResults: 10,
            currentPage: 1,
            q: "test",
            pages: {
                "1": [ 1, 2 ]
            },
            media: {
                "1": { id: 1, title: "Kill bill" } as any,
                "2": { id: 2, title: "Pulp Fiction" } as any
            } as any
        } as AppState);
    });

    it('should stop loader on error', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchError({}), {} as AppState]);
        expect(result).toEqual({loading: false});
    });

    it('should return the same state by default', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([{type: "test", payload: ""}, {} as AppState]);
        expect(result).toEqual({});
    });
});