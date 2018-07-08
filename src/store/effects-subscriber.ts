import {Store} from './store';
import {MovieEffect} from './effect';
import {Action} from './action';
import {injectable} from 'inversify';
import "reflect-metadata";

/**
 * Initializer for the effect module
 */
@injectable()
export class EffectsSubscriber {
    constructor(
        private store: Store,
        private effect: MovieEffect
    ) {
    }

    /**
     * Create the stream of effects and re-dispatch them as events
     * so that can be used to update the state of the app or can trigger
     * other side effects
     */
    public init = () => {
        this.effect.create(this.store.events$)
            .subscribe((action: Action) => {
                this.store.dispatch(action)
            });
    };
}
