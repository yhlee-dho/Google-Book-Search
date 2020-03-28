import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBookds => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.log(err));
    }

    render() {
        <div className="container">
            <h2>Saved Books</h2>
            <Results book={this.state.savedBooks} />
        </div>
    }
}

export default Saved;