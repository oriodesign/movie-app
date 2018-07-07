import {Reducer} from './reducer';
import {ChangeQueryAction, SearchEnd, SearchError, SearchStart} from './action';

describe('Reducer', () => {
    it('should reduce change query', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new ChangeQueryAction("test"), {}]);
        expect(result).toEqual({q: "test"});
    });

    it('should reduce request start', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchStart("test"), {}]);
        expect(result).toEqual({loading: true});
    });

    it('should reduce request end', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchEnd({} as any), {}]);
        expect(result).toEqual({loading: false});
    });

    it('should return the same state by default', () => {
        const reducer = new Reducer();
        const result = reducer.reduce([new SearchError({}), {}]);
        expect(result).toEqual({loading: false});
    });
});