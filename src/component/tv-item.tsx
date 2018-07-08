import * as React from "react";
import {Tv} from '../model/Tv';
import {ReactNode} from 'react';

export interface TvItemProperties { tv: Tv }
export interface TvItemState { }

/**
 * TvItem Component
 */
export class TvItem extends React.PureComponent<TvItemProperties, TvItemState> {

    /**
     * @returns {React.ReactNode}
     */
    render (): ReactNode {

        const tv = this.props.tv;
        return (
            <article className="media-item">
                <div className="image-wrapper">
                    {tv.poster_path ? <img src={"https://image.tmdb.org/t/p/w342"+tv.poster_path} /> : null}
                </div>
                <div className="info-wrapper">
                    <h1 className="media-title">{tv.name}</h1>
                    <h2 className="media-type">Tv</h2>
                    <h3 className="media-date">{tv.release_date}</h3>

                    <p className="media-overview">{tv.overview}</p>

                    <div className="media-info">
                        <div className="info-box">
                            <div>
                                <strong>Popularity: </strong>
                                <span className="media-popularity">{tv.popularity}</span>
                            </div>
                            <div>
                                <strong>Vote Count: </strong>
                                <span className="media-vote-count">{tv.vote_count}</span>
                            </div>
                            <div>
                                <strong>Vote Average: </strong>
                                <span className="media-vote-average">{tv.vote_average}</span>
                            </div>
                        </div>
                        <div className="info-box">
                            <div>
                                <strong>Original Title: </strong>
                                <span className="media-original-name">{tv.original_name}</span>
                            </div>
                            <div>
                                <strong>Original Language: </strong>
                                <span className="media-original-language">{tv.original_language}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
