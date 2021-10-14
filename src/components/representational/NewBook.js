import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>

                    <label>Book Name: </label>
                    <br />
                    <input onChange={this.handleInputChange}
                        value={this.state.bookName} name="bookName" type="text" />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input onChange={this.handleInputChange}
                        value={this.state.writer} name="writer" type="text" />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea onChange={this.handleInputChange}
                        value={this.state.description} name="description" />
                    <br />
                    <input value="submit" type="submit" />

                </form>
            </div>
        );
    }
}

export default NewBook;