import * as React from "react";
import {SearchBox} from './component/search-box';
import {Store} from './store/store';
import {Subscription} from 'rxjs';
import {MediaList} from './component/media-list';
import {AppState} from './store/app-state';
import './app.scss';
import {Loader} from './component/loader';

export interface InterfaceAppProps { store: Store; }


class App extends React.PureComponent<InterfaceAppProps, AppState> {

    private subscription: Subscription;

    componentDidMount() {
        this.subscription = this.props.store.state$.subscribe(state => {
            this.setState(state);
        });
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    public render() {

        if (!this.state) {
            return null;
        }

        return (
            <div className="container">
                <h1>Movie App</h1>
                <div className="search-box-wrapper">
                    <SearchBox store={this.props.store} />
                    {this.state.loading ? <div className="loader-wrapper"><Loader /></div> : null}
                </div>
                <MediaList pages={this.state.pages} media={this.state.media}/>
            </div>
        );
    }
}
export default App;
