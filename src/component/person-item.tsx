import * as React from "react";
import {Person} from '../model/Person';

export interface PersonItemProperties { person: Person }
export interface PersonItemState { }

export class PersonItem extends React.PureComponent<PersonItemProperties, PersonItemState> {

    constructor(props: PersonItemProperties) {
        super(props);
    }

    render () {

        const person = this.props.person;
        return (
            <article className="media-item">
                <div className="image-wrapper">
                    {person.profile_path ? <img src={"https://image.tmdb.org/t/p/w342"+person.profile_path} /> : null}
                </div>
                <div className="info-wrapper">
                    <h1 className="media-title">{person.name}</h1>
                    <h2 className="media-type">Person</h2>
                    <h3 className="media-date">Popularity: <span className="media-popularity">{person.popularity}</span></h3>
                </div>
            </article>
        );
    }
}
