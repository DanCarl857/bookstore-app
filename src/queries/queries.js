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

const getBookQuery = gql`
    query($id: Int!) {
        book(bookId: $id) {
            title
            author
            price
        }
    }
`;

const createBookMutation = gql`
    mutation($title: String!, $author: String!, $price: Float!) {
        createBook(title: $title, author: $author, price: $price) {
            bookId
            title
            author
            price
        }
    }
`;

const editBookMutation = gql`
    mutation($id: Int!, $title: String!, $author: String!, $price: Float!) {
        editBook(bookId: $id, title: $title, author: $author, price: $price) {
            bookId
            title
            author
            price
        }
    }
`;

export {
    getAllBooksQuery,
    getBookQuery,
    createBookMutation,
    editBookMutation
};