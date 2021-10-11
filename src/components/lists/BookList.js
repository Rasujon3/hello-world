import React from 'react';
import { Component } from 'react';
import Book from '../representational/Book';

class bookList extends Component {
    constructor(props){
        super(props);
        console.log("bookList Constructor");
    }

    UNSAFE_componentWillMount(){
        console.log("bookList componentWillMount");
    }
    componentDidMount(){
        console.log("bookList componentDidMount");
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("U bookList componentWillReceiveProps", nextProps);
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("U bookList shouldComponentUpdate", nextProps,nextState);
        return true;

    }
    UNSAFE_componentWillUpdate(nextProps,nextState){
        console.log("U bookList componentWillUpdate", nextProps,nextState);

    }

    componentDidUpdate(nextProps,nextState){
        console.log("U bookList componentDidUpdate", nextProps,nextState);
    }

    render(){
        console.log("bookList render");
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

export default bookList;