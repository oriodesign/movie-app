import {MovieService} from './movie-service';
import {Observable} from 'rxjs/internal/Observable';

describe('Movie Service', () => {
    describe('when searching', () => {
        it('should return a list of result', () => {
            const mockedRequest$ = Observable.create();
            const httpMock: any = {
                client: {},
                get: jest.fn().mockReturnValue(mockedRequest$)
            };

            const service = new MovieService(httpMock);
            const query = 'Bud Spencer';
            expect(service.searchMulti(query)).toEqual(mockedRequest$);
        });
    });
});
