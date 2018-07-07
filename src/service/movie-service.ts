import {HttpService} from './http-service';
import { Observable } from 'rxjs';

export class MovieService {

    constructor(
        private httpService: HttpService
    ) {
    }

    public searchMulti(query: string): Observable<any> {
        return this.httpService.get(query);
    }
}
