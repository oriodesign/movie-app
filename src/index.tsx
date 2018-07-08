import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import {Container} from 'inversify';
import {HttpService} from './service/http-service';
import {MovieService} from './service/movie-service';
import {MovieEffect} from './store/effect';
import {Store} from './store/store';
import {Reducer} from './store/reducer';
import "reflect-metadata";
import axios, {AxiosInstance} from 'axios';
import {EffectsSubscriber} from './store/effects-subscriber';

const container = new Container();
container.bind<AxiosInstance>("Factory<AxiosInstance>").toFactory<AxiosInstance>(() => {
    return () => axios.create();
});
container.bind<EffectsSubscriber>(EffectsSubscriber).to(EffectsSubscriber).inSingletonScope();
container.bind<HttpService>(HttpService).to(HttpService).inSingletonScope();
container.bind<MovieService>(MovieService).to(MovieService).inSingletonScope();
container.bind<MovieEffect>(MovieEffect).to(MovieEffect).inSingletonScope();
container.bind<Store>(Store).to(Store).inSingletonScope();
container.bind<Reducer>(Reducer).to(Reducer).inSingletonScope();

const store = container.get(Store);
const effectSubscriber = container.get(EffectsSubscriber);
effectSubscriber.init();

ReactDOM.render(
    <App store={store} />,
    document.getElementById("app"),
);
