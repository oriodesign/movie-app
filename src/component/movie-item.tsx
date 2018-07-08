import * as React from "react";
import {Movie} from '../model/movie';

export interface MovieItemProperties { movie: Movie }
export interface MovieItemState { }

export class MovieItem extends React.PureComponent<MovieItemProperties, MovieItemState> {

    constructor(props: MovieItemProperties) {
        super(props);
    }

    render () {
        return (
            <article>
                <h1 className="media-title">{this.props.movie.title}</h1>
                <h2 className="media-type">Movie</h2>
            </article>
        );
    }
}
