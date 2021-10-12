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
                    key={book.id}
                    selectedBookHandler={() => this.props.selectedBookHandler(book.id)}
                />
            );
        })
    );
    }
}

export default withRouter (bookList);