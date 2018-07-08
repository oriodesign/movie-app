import {shallow} from 'enzyme';
import * as React from "react";
import {Tv} from '../model/Tv';
import {TvItem} from './Tv-item';

describe('Tv Item Test', () => {
    it('should render the title and type', () => {
        const mediaMock = {
            name: "title",
            type: "Tv",
            overview: "overview",
            release_date: "12/12/12",
            popularity: 12,
            vote_count: 123,
            vote_average: 1,
            original_name: "original",
            original_language: "italian"
        } as any;
        const wrapper = shallow(<TvItem tv={mediaMock} />);
        expect(wrapper.find(".media-title").text()).toEqual("title");
        expect(wrapper.find(".media-type").text()).toEqual("Tv");
        expect(wrapper.find(".media-overview").text()).toEqual(mediaMock.overview);
        expect(wrapper.find(".media-date").text()).toEqual(mediaMock.release_date);
        expect(wrapper.find(".media-popularity").text()).toEqual(""+mediaMock.popularity);
        expect(wrapper.find(".media-vote-count").text()).toEqual(""+mediaMock.vote_count);
        expect(wrapper.find(".media-vote-average").text()).toEqual(""+mediaMock.vote_average);
        expect(wrapper.find(".media-original-name").text()).toEqual(mediaMock.original_name);
        expect(wrapper.find(".media-original-language").text()).toEqual(mediaMock.original_language);
    });
});
