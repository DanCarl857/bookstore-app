import React from 'react';
import { shallow } from 'enzyme';

import Header from './../components/Header/Header';

describe('Create Book', () => {
    it('should render correctly', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    })
});