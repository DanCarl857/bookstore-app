import React from 'react';
import { shallow, mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { MemoryRouter } from 'react-router';

import EditBook from './../components/EditBook/EditBook';

const client = new ApolloClient({
    uri: 'http://localhost:4567/graphql'
});

describe('Edit Book', () => {
    it('should render correctly', () => {
        const component = shallow(
            <EditBook
                match={{params: {id: 1}, isExact: true, path: "", url: ""}}
            />
        );
        expect(component).toMatchSnapshot();
    })

    const component = mount(shallow(
        <ApolloProvider client={client}>
            <MemoryRouter>
                <EditBook
                    match={{params: {id: 1}, isExact: true, path: "", url: ""}}
                />
            </MemoryRouter>
        </ApolloProvider>
    ).get(0));

    it('should have 2 text fields for title and author', () => {
        expect(component.find('input[type="text"]').length).toEqual(2);
    });

    it('should have 1 input field for the price of a book', () => {
        expect(component.find('input[type="number"]').length).toEqual(1);
    });
});