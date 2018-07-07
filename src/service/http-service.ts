import { Observable } from 'rxjs';
import axios, {AxiosInstance} from 'axios';

export class HttpService {

    constructor(
        private client: AxiosInstance
    ) {}

    public get(uri: string) {
        return Observable.create((observer: any) => {
            this.client.get(uri)
                .then((r: any) => {
                    observer.next(r);
                    observer.complete();
                })
                .catch((e: any) => {
                    observer.error(e);
                    observer.complete();
                });
        });
    }
}
