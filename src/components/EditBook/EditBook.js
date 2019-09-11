import React, { useEffect, useState } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { getBookQuery, editBookMutation } from './../../queries/queries';

const EditBook = ({ getBookQuery, editBookMutation, history, match }) => {

    useEffect(() => {
        let data = getBookQuery;
        if(data.book) {
            const {title, author, price} = data.book;
            setTitle(title);
            setAuthor(author);
            setPrice(price);
        }
    }, [getBookQuery]);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        editBookMutation({
            variables: {
                id: match.params.bookId,
                title,
                author,
                price
            }
        }).then(() => history.push('/'));
    }

    return (
        <div className="container box">
            <h2>Edit A Book</h2>
            <hr />
            <Form onSubmit={(event) => submitForm(event)}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        placeholder="Enter book title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        id="author"
                        value={author}
                        placeholder="Enter author's name"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        value={price}
                        placeholder="Enter book price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormGroup>
                <Button color="success" size="sm">Edit Book</Button>{'  '}
                <Button color="danger" size="sm">
                    <Link to="/">Cancel</Link>
                </Button>
            </Form>
        </div>
    )
}

export default compose(
    graphql(getBookQuery, {
        name: "getBookQuery",
        options: (props) => {
            return {
                variables: {
                    id: props.match.params.bookId
                }
            }
        }
    }),
    graphql(editBookMutation, { name: "editBookMutation"})
)(EditBook);