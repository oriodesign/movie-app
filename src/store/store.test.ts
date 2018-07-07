import {Action} from './action';
import {AppState, Store} from './store';

describe('Store', () => {
    it('should dispatch events', () => {
        const reducerMock = {
            reduce: ([action, state]: [Action, AppState]) => state
        };
        const store = new Store(reducerMock);

        spyOn(store.events$, 'next');
        const action = {type: 'a', payload: null} as Action;
        store.dispatch(action);
        expect(store.events$.next).toHaveBeenCalledWith(action);
    });
});