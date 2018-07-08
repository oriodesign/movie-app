import * as React from "react";
import {SearchBox} from './component/search-box';
import {Store} from './store/store';
import {Subscription} from 'rxjs';
import {MediaList} from './component/media-list';
import {AppState} from './store/app-state';
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
            <div>
                <h1>Movie App</h1>
                <SearchBox store={this.props.store} />
                <MediaList pages={this.state.pages} media={this.state.media}/>
            </div>
        );
    }
}
export default App;
