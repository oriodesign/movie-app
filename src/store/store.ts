import {Observable} from 'rxjs/internal/Observable';
import {Action} from './action';
import {Subject} from 'rxjs/internal/Subject';
import {map, withLatestFrom} from 'rxjs/operators';
import {Reducer} from './reducer';
import {injectable} from 'inversify';
import "reflect-metadata";
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

export interface AppState {}

@injectable()
export class Store {

    public readonly events$: Subject<Action>;
    public readonly state$: Observable<AppState>;

    constructor(reducer: Reducer) {
        this.state$ = new BehaviorSubject({});
        this.events$ = new Subject();

        this.state$ =  this.events$.pipe(
            withLatestFrom(this.state$),
            map(reducer.reduce)
        );
    }

    public dispatch = (action: Action) => {
        this.events$.next(action);
    };
}
