import * as React from "react";
import {Person} from '../model/Person';

export interface PersonItemProperties { person: Person }
export interface PersonItemState { }

export class PersonItem extends React.PureComponent<PersonItemProperties, PersonItemState> {

    constructor(props: PersonItemProperties) {
        super(props);
    }

    render () {
        return (
            <article>
                <h1 className="media-title">{this.props.person.name}</h1>
                <h2 className="media-type">Person</h2>
            </article>
        );
    }
}
