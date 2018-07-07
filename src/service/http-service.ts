import { Observable } from 'rxjs';
import {inject, injectable} from 'inversify';
import "reflect-metadata";
import {AxiosInstance, AxiosRequestConfig} from 'axios';

@injectable()
export class HttpService {

    private client: AxiosInstance;

    constructor(
        @inject("Factory<AxiosInstance>") private factory: () => AxiosInstance
    ) {
        this.client = factory();
    }

    public get(url: string, config: AxiosRequestConfig) {
        return Observable.create((observer: any) => {
            this.client.get(url, config)
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
