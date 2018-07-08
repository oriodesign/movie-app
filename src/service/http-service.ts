import { Observable } from 'rxjs';
import {inject, injectable} from 'inversify';
import "reflect-metadata";
import {AxiosInstance, AxiosRequestConfig} from 'axios';

/**
 * HttpService
 * Simple wrapper of axios to make http request using observables
 * @TODO implement other http methods
 */
@injectable()
export class HttpService {

    private client: AxiosInstance;

    /**
     * @param {() => AxiosInstance} factory
     */
    constructor(
        @inject("Factory<AxiosInstance>") private factory: () => AxiosInstance
    ) {
        this.client = factory();
    }

    /**
     * Http Get Request
     * @param {string} url
     * @param {AxiosRequestConfig} config
     * @returns {Observable}
     */
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
