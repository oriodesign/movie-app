import {HttpService} from './http-service';
import { Observable } from 'rxjs';
import {injectable} from 'inversify';
import "reflect-metadata";

@injectable()
export class MovieService {

    constructor(
        private httpService: HttpService
    ) {
    }

    public searchMulti(query: string): Observable<any> {
        const baseUrl = 'https://api.themoviedb.org/3/search/multi';
        const params = {
            api_key: "ad5e9449e5bc9b6477eff56483df4086",
            query
        };
        const config = {
            params
        };
        return this.httpService.get(baseUrl, config);
    }
}
