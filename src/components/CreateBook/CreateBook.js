import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createBookMutation } from './../../queries/queries';

const CreateBook = ({ createBookMutation, history }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        createBookMutation({
            variables: {
                title,
                author,
                price
            }
        }).then(() => history.push('/'));
    }

    return (
        <div className="container box">
            <h2>Create a New Book</h2>
            <hr />
            <Form onSubmit={(event) => submitForm(event)}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
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
                        placeholder="Enter book price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </FormGroup>
                <Button color="success" size="sm">Create Book</Button>{'  '}
                <Button color="danger" size="sm">
                    <Link to="/">Cancel</Link>
                </Button>
            </Form>
        </div>
    )
}

export default compose(
    graphql(createBookMutation, { name: "createBookMutation"})
)(CreateBook);