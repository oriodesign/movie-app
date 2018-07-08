import {HttpService} from './http-service';
import { Observable } from 'rxjs';
import {injectable} from 'inversify';
import "reflect-metadata";
import {Media} from '../model/media';
import { config } from '../config/config';

export interface SearchMultiResponse {
    page: number;
    total_pages: number;
    total_results: number;
    results: Media[];
}

/**
 * MovieService
 * Service to interact with "The Movie DB" api
 */
@injectable()
export class MovieService {

    private readonly defaultParams: { api_key: string; };
    private readonly baseUrl: string;

    /**
     * @param {HttpService} httpService
     */
    constructor(
        private httpService: HttpService
    ) {
        this.defaultParams = {
            api_key: config.apiKey,
        };
        this.baseUrl = 'https://api.themoviedb.org/3';
    }

    /**
     * Search movies, people and tv shows
     * @link https://developers.themoviedb.org/3/search/multi-search
     * @param {string} query
     * @returns {Observable<SearchMultiResponse>}
     */
    public searchMulti = (query: string): Observable<SearchMultiResponse> => {
        const params = {
            ...this.defaultParams,
            query
        };
        const config = {
            params
        };
        return this.httpService.get(this.baseUrl + "/search/multi", config);
    };
}
