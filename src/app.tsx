import * as React from "react";
import {SearchBox} from './component/search-box';
import {Store} from './store/store';
import {Subscription} from 'rxjs';
import {MediaList} from './component/media-list';
import {AppState} from './store/app-state';
import './app.scss';
import {Loader} from './component/loader';
import {ReactNode} from 'react';

export interface InterfaceAppProps { store: Store; }

/**
 * App
 */
class App extends React.PureComponent<InterfaceAppProps, AppState> {

    private subscription: Subscription;

    /**
     * The app receives the app state from the store
     */
    componentDidMount() {
        this.subscription = this.props.store.state$.subscribe(state => {
            this.setState(state);
        });
    }

    /**
     * Unsubscribe on un mount
     */
    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    /**
     * @returns {React.ReactNode}
     */
    public render(): ReactNode {

        if (!this.state) {
            return null;
        }

        return (
            <div className="container">
                <h1>Movie App</h1>
                <div className="search-box-wrapper">
                    <SearchBox q={this.state.q} store={this.props.store} />
                    {this.state.loading ? <div className="loader-wrapper"><Loader /></div> : null}
                </div>
                <MediaList pages={this.state.pages} media={this.state.media}/>
            </div>
        );
    }
}
export default App;
