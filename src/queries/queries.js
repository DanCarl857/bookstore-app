import { gql } from 'apollo-boost';

const getAllBooksQuery = gql`
    {
        books {
            bookId
            title
            author
            price
        }
    }
`;

export {
    getAllBooksQuery
};