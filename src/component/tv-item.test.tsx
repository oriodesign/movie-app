import {shallow} from 'enzyme';
import * as React from "react";
import {Tv} from '../model/Tv';
import {TvItem} from './Tv-item';

describe('Tv Item Test', () => {
    it('should render the title and type', () => {
        const mediaMock = {
            name: "title",
            type: "Tv",
        } as any;
        const wrapper = shallow(<TvItem tv={mediaMock} />);
        expect(wrapper.find(".media-title").text()).toEqual("title");
        expect(wrapper.find(".media-type").text()).toEqual("Tv");
    });
});
