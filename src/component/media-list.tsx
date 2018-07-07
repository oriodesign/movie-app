import * as React from "react";
import {Movie} from '../model/movie';

export interface MediaListProperties { movie: Movie }
export interface MediaListState { }

export class MediaList extends React.Component<MediaListProperties, MediaListState> {

    constructor(props: MediaListProperties) {
        super(props);
    }

    render () {
        return (
            <article>

            </article>
        );
    }
}
