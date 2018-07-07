import {shallow} from 'enzyme';
import * as React from "react";
import {MovieItem} from './movie-item';

describe('Media List Test', () => {
    it('should render a list of media items', () => {
        const mediaMock = {
            title: "title",
            type: "movie",
        } as any;
        const wrapper = shallow(<MovieItem movie={mediaMock} />);
        expect(wrapper.find(".media-title").text()).toEqual("title");
    });
});