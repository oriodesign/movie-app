import {shallow} from 'enzyme';
import * as React from "react";
import {Movie} from '../model/movie';
import {MovieItem} from './movie-item';

describe('Movie Item Test', () => {
    it('should render the title and type', () => {
        const mediaMock = {
            title: "title",
            type: "movie",
        } as any;
        const wrapper = shallow(<MovieItem movie={mediaMock} />);
        expect(wrapper.find(".media-title").text()).toEqual("title");
        expect(wrapper.find(".media-type").text()).toEqual("Movie");
    });
});