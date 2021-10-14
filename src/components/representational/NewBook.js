import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookName: "",
            writer: "",
            description: "",
        }
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form>

                    <label>Book Name: </label>
                    <br />
                    <input onChange={(event) => this.handleInputChange(event)}
                        value={this.state.bookName} name="bookName" type="text" />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input onChange={(event) => this.handleInputChange(event)}
                        value={this.state.writer} name="writer" type="text" />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea onChange={(event) => this.handleInputChange(event)}
                        value={this.state.description} name="description" />
                    <br />
                    <input value="submit" type="submit" />

                </form>
            </div>
        );
    }
}

export default NewBook;