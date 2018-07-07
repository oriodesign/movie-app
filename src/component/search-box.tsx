import * as React from "react";
import {ChangeEvent} from 'react';
import {Store} from '../store/store';
import {ChangeQueryAction} from '../store/action';

export interface SearchBoxProperties { store: Store }
export interface SearchBoxState { }

export class SearchBox extends React.Component<SearchBoxProperties, SearchBoxState> {

    constructor(props: SearchBoxProperties) {
        super(props);
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        this.props.store.dispatch(new ChangeQueryAction(val))
    };

    render () {
        return (
            <div>
                <input className="search-input" type="text" name="query" value="" onChange={this.handleChange} />
            </div>
        );
    }
}
