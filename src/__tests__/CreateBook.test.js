import React from 'react';
import { shallow, mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { MemoryRouter } from 'react-router';

import CreateBook from './../components/CreateBook/CreateBook';

const client = new ApolloClient({
    uri: 'http://localhost:4567/graphql'
});

describe('Create Book', () => {

    const component = mount(shallow(
        <ApolloProvider client={client}>
            <MemoryRouter>
                <CreateBook />
            </MemoryRouter>
        </ApolloProvider>
    ).get(0));

    it('should render correctly', () => {
        const component = shallow(<CreateBook />);
        expect(component).toMatchSnapshot();
    });

    it('should have 2 text fields for title and author', () => {
        expect(component.find('input[type="text"]').length).toEqual(2);
    });

    it('should have 1 input field for the price of a book', () => {
        expect(component.find('input[type="number"]').length).toEqual(1);
    });
});