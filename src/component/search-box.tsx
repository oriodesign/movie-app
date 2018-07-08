import * as React from "react";
import {ChangeEvent} from 'react';
import {Store} from '../store/store';
import {ChangeQueryAction} from '../store/action';
import './search-box.scss';

export interface SearchBoxProperties { store: Store, q: string }
export interface SearchBoxState {  }

export class SearchBox extends React.PureComponent<SearchBoxProperties, SearchBoxState> {

    constructor(props: SearchBoxProperties) {
        super(props);
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        this.props.store.dispatch(new ChangeQueryAction(val));
    };

    render () {
        return (
            <div className="search-box">
                <input className="search-input" type="text" name="query" value={this.props.q} onChange={this.handleChange} />
            </div>
        );
    }
}
