import {Action} from './action';
import {Subject} from 'rxjs/internal/Subject';
import {map, withLatestFrom} from 'rxjs/operators';
import {Reducer} from './reducer';
import {injectable} from 'inversify';
import "reflect-metadata";
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {AppState} from './app-state';

/**
 * Store inspired by ngrx store
 * @TODO extract the events subscription and state init into a different class
 */
@injectable()
export class Store {

    public readonly events$: Subject<Action>;
    public readonly state$: BehaviorSubject<AppState>;

    /**
     * @param {Reducer} reducer
     */
    constructor(reducer: Reducer) {
        this.state$ = new BehaviorSubject({
            loading: false,
            q: "",
            media: {},
            currentPage: 1,
            totalPages: null,
            totalResults: null,
            pages: {}
        });
        this.events$ = new Subject();

        this.events$.pipe(
            withLatestFrom(this.state$),
            map(reducer.reduce)
        ).subscribe(v => this.state$.next(v));
    }

    /**
     * Dispatch new events that can generate side effects or state update
     * @param {Action} action
     */
    public dispatch = (action: Action) => {
        this.events$.next(action);
    };
}
