import {shallow} from 'enzyme';
import {SearchBox} from './search-box';
import * as React from "react";
import {ChangeQueryAction} from '../store/action';

describe('Search Box Test', () => {
    it('should dispatch an event on value change', () => {
        const storeMock = {
            dispatch: jest.fn(),
        } as any;
        const wrapper = shallow(<SearchBox q="" store={storeMock} />);

        wrapper.find(".search-input").simulate("change", {
            target: {
                value: "text"
            }
        });
        expect(storeMock.dispatch).toBeCalledWith(new ChangeQueryAction("text"));
    });
});