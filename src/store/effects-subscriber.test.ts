import {EffectsSubscriber} from './effects-subscriber';
import {Subject} from 'rxjs/internal/Subject';

describe('Effect Subscriber', () => {
    it('should re dispatch the events received from the effects', () => {
        const dispatch = jest.fn();
        const effectEvents$ = new Subject();
        const store = {
            dispatch
        } as any;
        const effect = {
            create: () => effectEvents$
        } as any;
        const subscriber = new EffectsSubscriber(store, effect);
        subscriber.init();
        effectEvents$.next({type: "a"});
        effectEvents$.next({type: "b"});
        effectEvents$.next({type: "c"});

        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: "a"});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: "b"});
        expect(dispatch).toHaveBeenNthCalledWith(3, {type: "c"});
    });
});