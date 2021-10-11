import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            showBooks: true
        }
        console.log("MainComponent Constructor");
    }
    

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }

    deleteBookState = (index) => {
        // const books = this.state.books.splice();
        // const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1); // delete specfic book
        this.setState({
            books: books
        });
    };

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks });
    }

    
    componentDidMount(){
        console.log("MainComponent componentDidMount");
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log("U MainCOmponent shouldComponentUpdate",nextProps,nextState);
        return true;
    }


    componentDidUpdate(nextProps,nextState){
        console.log("U MainCOmponent componentDidUpdate", nextProps,nextState);
    }

    static getDerivedStateFromProps(nextProps,prevState){
        console.log("mainComponent getDerivedStateFromProps",nextProps,prevState);
        return prevState;
    }
    getSnapshotBeforeUpdate(){
        console.log("U mainComponent getSnapshotBeforeUpdate");
    }

    render() {
        console.log("MainComponent render");
        const style = {
            border: "1px solidd red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white"
        };

        // const bookState = this.state.books;
        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}

            />
        }


        // console.log(bookState);
        console.log(books);

        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button>
                {books}

            </div>
        );

    }
}

export default MainComponent;