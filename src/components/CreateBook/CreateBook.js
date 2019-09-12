import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createBookMutation } from './../../queries/queries';
import * as UTILS from './../../utils';

const CreateBook = ({ createBookMutation, history }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState({
        title: '',
        author: '',
        price: ''
    });

    const submitForm = (event) => {
        event.preventDefault();
        if (UTILS.validateForm(errors)) {
            createBookMutation({
                variables: {
                    title,
                    author,
                    price
                }
            }).then(() => history.push('/'));
        } else {
            console.log('Invalid Form');
        }

    };

    const handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let tempErrors = {...errors };

        switch (name) {
            case 'title':
                tempErrors.title = value.length < 5 ? 'Title should be at least 5 characters long.' : '';
                setTitle(value);
                break;
            case 'author':
                tempErrors.author = value.length < 5 ? 'Author name should be at least 5 characters long.' : '';
                setAuthor(value);
                break;
            case 'price':
                tempErrors.price = parseFloat(value) <= 0 ? 'Book cannot be free.' : '';
                setPrice(price);
                break;
            default:
                break;
        }
        setErrors(tempErrors);
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
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.title.length > 0 && <span className="error">{errors.title}</span>}
                </FormGroup>
                <FormGroup>
                    <Label for="author">Author</Label>
                    <Input
                        type="text"
                        name="author"
                        id="author"
                        placeholder="Enter author's name"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.author.length > 0 && <span className="error">{errors.author}</span>}
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Enter book price"
                        onChange={(e) => handleChange(e)}
                    />
                    {errors.price.length > 0 && <span className="error">{errors.price}</span>}
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