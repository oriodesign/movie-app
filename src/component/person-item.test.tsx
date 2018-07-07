import {shallow} from 'enzyme';
import * as React from "react";
import {Person} from '../model/Person';
import {PersonItem} from './Person-item';

describe('Person Item Test', () => {
    it('should render the title and type', () => {
        const mediaMock = {
            name: "name",
            type: "person",
        } as any;
        const wrapper = shallow(<PersonItem person={mediaMock} />);
        expect(wrapper.find(".media-title").text()).toEqual("name");
        expect(wrapper.find(".media-type").text()).toEqual("Person");
    });
});
