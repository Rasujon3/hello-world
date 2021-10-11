import React from 'react';
import { Component } from 'react';
import Book from '../representational/Book';

class bookList extends Component {
    constructor(props){
        super(props);
        console.log("bookList Constructor");
    }

    
    componentDidMount(){
        console.log("bookList componentDidMount");
    }


    shouldComponentUpdate(nextProps,nextState){
        console.log("U bookList shouldComponentUpdate", nextProps,nextState);
        return true;

    }
    
    componentDidUpdate(nextProps,nextState){
        console.log("U bookList componentDidUpdate", nextProps,nextState);
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("bookList getDerivedStateFromProps",nextProps,prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate(){
        console.log("U bookList getSnapshotBeforeUpdate");
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