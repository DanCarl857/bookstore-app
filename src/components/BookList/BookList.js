import React, { useRef, useState } from 'react';
import { graphql } from 'react-apollo';
import { getAllBooksQuery } from './../../queries/queries';
import { Table, Input, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = ({ data }) => {

    const selectedCheckBoxes = useRef(new Set());
    const tCount = useRef(0);
    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0.0);

    const toggleCheckbox = (book) => {
        if (selectedCheckBoxes.current.has(book)) {
            selectedCheckBoxes.current.delete(book);
            setCount(tCount.current -= 1);
        } else {
            selectedCheckBoxes.current.add(book);
            setCount(tCount.current += 1);
        }
        calculateSum(selectedCheckBoxes.current);
    }

    const calculateSum = (obj) => {
        let sum = 0.0;
        for(let item of obj) {
            sum += item.price;
        }
        setTotal(sum.toFixed(2));
    }

    const displayBooks = () => {
        if (data.books) {
            if (data.loading) {
                return (<>Getting books...</>);
            } else {
                return data.books.map(book => {
                    return (
                        <tr key={book.bookId}>
                            <td className="check">
                                <Input
                                    onChange={e => toggleCheckbox(book)}
                                    value={book.price}
                                    type="checkbox"
                                />
                            </td>
                            <td>{book.bookId}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>${book.price}</td>
                            <td><Link to={`/edit/${book.bookId}`} params={{ bookId: book.bookId }}><i className="icon ion-md-create"></i></Link></td>
                        </tr>
                    )
                })
            }
        } else {
            return (<>Please make sure the server is up and running!</>);
        }
    }

    return (
        <div className="box container">
            <Row>
                <Col xs="12" md="6">
                    <h3>Dashboard</h3>
                </Col>
                <Col xs="12" md="6">
                    <Button color="success" size="sm" className="float-right">
                        <Link to="/create-book">Create New Book</Link>
                    </Button>
                </Col>
            </Row>
            {
                count > 0 ?
                <Row>
                    <Col xs="12" md="6">
                        <h6>Number of Books selected: {count}</h6>
                    </Col>
                    <Col xs="12" md="6">
                        <h6 className="float-right">Total Price: ${total}</h6>
                    </Col>
                </Row> : <div></div>
            }
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