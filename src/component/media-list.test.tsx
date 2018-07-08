import {shallow} from 'enzyme';
import * as React from "react";
import {MovieItem} from './movie-item';
import {MediaList} from './media-list';
import {TvItem} from './tv-item';
import {PersonItem} from './person-item';

describe('Media List Test', () => {
    it('should render a list of media items', () => {
        const pageMock = {
            "1": [1,2,3,4,5]
        };
        const mediaMock = {
            "1": { id: 1, title: "title", media_type: "tv" },
            "2": { id: 2, title: "title", media_type: "movie" },
            "3": { id: 3, title: "title", media_type: "movie" },
            "4": { id: 4, title: "title", media_type: "person" },
            "5": { id: 5, title: "title", media_type: "something_else" },
        } as any;
        const wrapper = shallow(<MediaList pages={pageMock} media={mediaMock} />);
        expect(wrapper.find(MovieItem).length).toEqual(2);
        expect(wrapper.find(TvItem).length).toEqual(1);
        expect(wrapper.find(PersonItem).length).toEqual(1);
    });
});
