import * as React from "react";
import {Tv} from '../model/Tv';

export interface TvItemProperties { tv: Tv }
export interface TvItemState { }

export class TvItem extends React.Component<TvItemProperties, TvItemState> {

    constructor(props: TvItemProperties) {
        super(props);
    }

    render () {
        return (
            <article>
                <h1 className="media-title">{this.props.tv.name}</h1>
                <h2 className="media-type">Tv</h2>
            </article>
        );
    }
}
