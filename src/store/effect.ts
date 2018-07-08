import {Action, ACTION_TYPE, SearchEnd, SearchError, SearchStart} from './action';
import {Observable} from 'rxjs/internal/Observable';
import {catchError, debounceTime, filter, flatMap, map, mapTo, tap} from 'rxjs/operators';
import { merge } from 'rxjs';
import {MovieService} from '../service/movie-service';
import {of} from 'rxjs/internal/observable/of';
import {injectable} from 'inversify';
import "reflect-metadata";
import {Subject} from 'rxjs/internal/Subject';

interface Effect {
    create: (source$: Observable<Action>) => Observable<Action>;
}

@injectable()
export class MovieEffect implements Effect {
    constructor(
        private movieService: MovieService
    ) {
    }

    public create = (source$: Subject<Action>): Observable<Action> => {
        return merge(
            this.onChangeQuery(source$),
            this.onSearchStart(source$)
        );
    };

    private onChangeQuery = (source$: Observable<Action>): Observable<Action> => {
        return source$.pipe(
            filter((a: Action) => a.type === ACTION_TYPE.CHANGE_QUERY),
            debounceTime(300),
            map((a: Action ) => new SearchStart(a.payload))
        );
    };

    private onSearchStart = (source$: Observable<Action>): Observable<Action> => {
        return source$.pipe(
            filter((a: Action) => a.type === ACTION_TYPE.SEARCH_START),
            flatMap((a: Action) =>
                this.movieService.searchMulti(a.payload)
                    .pipe(
                        map((response: any) => new SearchEnd(response.data)),
                        catchError((e: any) => of(new SearchError(e))),
                    )
            )
        );
    };
}
