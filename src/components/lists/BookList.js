import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router';
import Book from '../representational/Book';

class bookList extends Component {
    render(){
        console.log(this.props);
    return (
        this.props.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.props.deleteBookState(index)}
                    key={book.id}
                    inputName={(event) => this.props.changeWithInputState(event, index)}
                />
            );
        })
    );
    }
}

export default withRouter (bookList);