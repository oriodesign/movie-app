import * as React from "react";
import {Movie} from '../model/movie';
import {Person} from '../model/person';
import {Tv} from '../model/tv';
import {MovieItem} from './movie-item';
import {TvItem} from './tv-item';
import {PersonItem} from './person-item';
import {Media} from '../model/media';
import {MediaResults, PageResults} from '../store/app-state';
import './media-list.scss';
import {ReactNode} from 'react';

export interface MediaListProperties { pages: PageResults, media: MediaResults }
export interface MediaListState { }

/**
 * Media List Component
 * Display a list of movies, people and tv shows
 */
export class MediaList extends React.PureComponent<MediaListProperties, MediaListState> {

    /**
     * @returns {ReactNode}
     */
    render (): ReactNode {

        const media = Object.keys(this.props.pages)
            .reduce((acc, pageId) => [
                    ...acc,
                    ...this.props.pages[pageId].map(id => this.props.media[id])],
                []);

        const list = media.map((m: Media) => {
            if (m.media_type === "movie") {
                return (<MovieItem key={m.id} movie={m as Movie}/>);
            } else if (m.media_type === "tv") {
                return (<TvItem key={m.id} tv={m as Tv}/>);
            } else if (m.media_type === "person") {
                return (<PersonItem key={m.id} person={m as Person}/>);
            }

            return null;
        });

        return (
            <div>{list}</div>
        );
    }
}
