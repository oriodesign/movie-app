import * as React from "react";
import {SearchBox} from './component/search-box';
import {Store} from './store/store';
export interface InterfaceAppProps { store: Store; }

class App extends React.Component<InterfaceAppProps, undefined> {
    public render() {
        return (
            <div>
                <h1>Movie App</h1>
                <SearchBox store={this.props.store} />
            </div>
        );
    }
}
export default App;
