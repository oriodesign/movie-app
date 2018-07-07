import {MovieEffect} from './effect';
import {Action, ACTION_TYPE, ChangeQueryAction, SearchStart} from './action';
import {Subject} from 'rxjs/internal/Subject';
import {of} from 'rxjs/internal/observable/of';
import {Observable} from 'rxjs/internal/Observable';
import any = jasmine.any;
import {throwError} from 'rxjs/internal/observable/throwError';

describe("Effect", () => {
    it("should dispatch a search start when the query changes", done => {
        const serviceMock = {} as any;
        const effect = new MovieEffect(serviceMock);
        const source$ = new Subject<Action>();
        const result$ = effect.create(source$);
        result$.subscribe((a: Action) => {
            expect(a.type).toEqual(ACTION_TYPE.SEARCH_START);
            expect(a.payload).toEqual("text");
            done();
        });
        source$.next(new ChangeQueryAction("text"));
    });

    it("should dispatch a search end end on success", done => {
        const mockResponse = {};
        const serviceMock = {
            searchMulti: jest.fn().mockReturnValue(of(mockResponse))
        } as any;
        const effect = new MovieEffect(serviceMock);
        const source$ = new Subject<Action>();
        const result$ = effect.create(source$);
        result$.subscribe((a: Action) => {
            expect(a.type).toEqual(ACTION_TYPE.SEARCH_END);
            expect(a.payload).toEqual(mockResponse);
            done();
        });
        source$.next(new SearchStart("text"));
    });

    it("should dispatch a search error end on request error", done => {
        const mockResponse = {};
        const serviceMock = {
            searchMulti: jest.fn().mockReturnValue(throwError(mockResponse))
        } as any;
        const effect = new MovieEffect(serviceMock);
        const source$ = new Subject<Action>();
        const result$ = effect.create(source$);
        result$.subscribe((a: Action) => {
            expect(a.type).toEqual(ACTION_TYPE.SEARCH_ERROR);
            expect(a.payload).toEqual(mockResponse);
            done();
        });
        source$.next(new SearchStart("text"));
    });
});

