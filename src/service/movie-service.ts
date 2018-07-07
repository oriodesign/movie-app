import {HttpService} from './http-service';
import { Observable } from 'rxjs';
import {injectable} from 'inversify';
import "reflect-metadata";
import {Movie} from '../model/movie';
import {Person} from '../model/person';
import {Tv} from '../model/tv';

export interface SearchMultiResponse {
    page: number;
    total_pages: number;
    total_results: number;
    results: (Movie|Tv|Person)[];
}

@injectable()
export class MovieService {

    private readonly defaultParams: { api_key: string; };
    private readonly baseUrl: string;

    constructor(
        private httpService: HttpService
    ) {
        this.defaultParams = {
            api_key: "ad5e9449e5bc9b6477eff56483df4086",
        };
        this.baseUrl = 'https://api.themoviedb.org/3/search/multi';
    }

    public searchMulti = (query: string): Observable<SearchMultiResponse> => {
        const params = {
            ...this.defaultParams,
            query
        };
        const config = {
            params
        };
        return this.httpService.get(this.baseUrl, config);
    };
}
