import React from 'react';
import { shallow } from 'enzyme';

import BookList from './../components/BookList/BookList';

describe('Book List', () => {
    it('should render correctly', () => {
        const component = shallow(<BookList />);
        expect(component).toMatchSnapshot();
    })
});