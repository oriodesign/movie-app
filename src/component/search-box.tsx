import * as React from "react";
import {ChangeEvent} from 'react';
import {Store} from '../store/store';
import {ChangeQueryAction} from '../store/action';

export interface SearchBoxProperties { store: Store }
export interface SearchBoxState { value: string; }

export class SearchBox extends React.Component<SearchBoxProperties, SearchBoxState> {

    constructor(props: SearchBoxProperties) {
        super(props);
        this.state = { value: "" };
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        this.props.store.dispatch(new ChangeQueryAction(val));
        this.setState({value: val});
    };

    render () {
        return (
            <div>
                <input className="search-input" type="text" name="query" value={this.state.value} onChange={this.handleChange} />
            </div>
        );
    }
}
