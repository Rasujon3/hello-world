import React from 'react';
import { withRouter } from 'react-router';
import '../../stylesheets/Book.css';


const Book = (props) => {
    console.log(props);
    return (
        <div className="Book" onClick={props.selectedBookHandler}>
            <h3 >Book : {props.bookName}</h3>
            <h4>Writer : {props.writer}</h4>
        </div>
    );
}

export default withRouter(Book);