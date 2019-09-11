import React from 'react';
import { graphql } from 'react-apollo';
import { getAllBooksQuery } from './../../queries/queries';
import { Table, Input, Row, Col, Button } from 'reactstrap';
import './BookList.css';

const BookList = ({ data }) => {

    const displayBooks = () => {
        if (data.loading) {
            return (<div>Getting books...</div>);
        } else {
            return data.books.map(book => {
                return (
                    <tr key={book.bookId}>
                        <td className="check">
                            <Input type="checkbox" id="checkbox2" />
                        </td>
                        <td>{book.bookId}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>$ {book.price}</td>
                        <td><i class="icon ion-md-create"></i></td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="box container">
            <Row>
                <Col xs="12" md="6">
                    <h3>Dashboard</h3>
                </Col>
                <Col xs="12" md="6">
                    <Button color="success" size="sm" className="float-right">Create New Book</Button>
                </Col>
            </Row>
            <Table striped>
                <thead>
                <tr>
                    <th>Check</th>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author Name</th>
                    <th>Price</th>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                    {displayBooks()}
                </tbody>
            </Table>
        </div>
    )
}

export default graphql(getAllBooksQuery)(BookList);