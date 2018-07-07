import {Store} from './store';
import {MovieEffect} from './effect';
import {Action} from './action';
import {injectable} from 'inversify';
import "reflect-metadata";

@injectable()
export class EffectsSubscriber {
    constructor(
        private store: Store,
        private effect: MovieEffect
    ) {
    }

    public init = () => {
        this.effect.create(this.store.events$)
            .subscribe((action: Action) => {
                this.store.dispatch(action)
            });
    };
}
