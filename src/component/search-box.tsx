import * as React from "react";
import {ChangeEvent} from 'react';
import {Store} from '../store/store';
import {ChangeQueryAction} from '../store/action';
import './search-box.scss';
import {ReactNode} from 'react';

export interface SearchBoxProperties { store: Store, q: string }
export interface SearchBoxState {  }

/**
 * SearchBox Component
 */
export class SearchBox extends React.PureComponent<SearchBoxProperties, SearchBoxState> {

    /**
     * On input change dispatch event
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        this.props.store.dispatch(new ChangeQueryAction(val));
    };

    /**
     * @returns {ReactNode}
     */
    render (): ReactNode {
        return (
            <div className="search-box">
                <input className="search-input" type="text" name="query" value={this.props.q} onChange={this.handleChange} />
            </div>
        );
    }
}
