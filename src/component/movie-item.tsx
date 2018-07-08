import * as React from "react";
import {Movie} from '../model/movie';

export interface MovieItemProperties { movie: Movie }
export interface MovieItemState { }

export class MovieItem extends React.PureComponent<MovieItemProperties, MovieItemState> {

    constructor(props: MovieItemProperties) {
        super(props);
    }

    render () {
        const movie = this.props.movie;
        return (
            <article className="media-item">
                <div className="image-wrapper">
                    {movie.poster_path ? <img src={"https://image.tmdb.org/t/p/w342"+movie.poster_path} /> : null}
                </div>
                <div className="info-wrapper">
                    <h1 className="media-title">{movie.title}</h1>
                    <h2 className="media-type">Movie</h2>
                    <h3 className="media-date">{movie.release_date}</h3>

                    <p className="media-overview">{movie.overview}</p>

                    <div className="media-info">
                        <div className="info-box">
                            <div>
                                <strong>Popularity: </strong>
                                <span className="media-popularity">{movie.popularity}</span>
                            </div>
                            <div>
                                <strong>Vote Count: </strong>
                                <span className="media-vote-count">{movie.vote_count}</span>
                            </div>
                            <div>
                                <strong>Vote Average: </strong>
                                <span className="media-vote-average">{movie.vote_average}</span>
                            </div>
                        </div>
                        <div className="info-box">
                            <div>
                                <strong>Original Title: </strong>
                                <span className="media-original-title">{movie.original_title}</span>
                            </div>
                            <div>
                                <strong>Original Language: </strong>
                                <span className="media-original-language">{movie.original_language}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}
