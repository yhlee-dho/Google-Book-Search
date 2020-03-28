import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
            .then(savedBooks => this.setState({ savedBooks: savedBooks }))
            .catch(err => console.log(err));
    }

    handleSave = book => {
        if(this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
                .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
        } else {
            API.saveBook(book)
                .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.books.length ? 
                (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                    <div>
                        {this.props.books.map(res => (
                            <div className="card mb-3" key={res._id}>
                                <div className="row">
                                    <div cassName="col-md-2">
                                        <img className="img-fluid" alt={res.title} src={res.image} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h6 className="card-title">{res.title} by {res.authors}</h6>
                                            <p className="card-text">{res.description}</p>
                                            <div>
                                                <a 
                                                    className="btn badge-pill btn-outline-dark mt-3" 
                                                    href={res.link} 
                                                    target="_blank"
                                                    rel="noopener noreferrer">View</a>
                                                <button onClick={() => this.handleSave(res)} 
                                                        className="btn badge-pill btn-outline-warning mt-3 ml-3">
                                                    {this.state.savedBooks.map(book => book._id).includes(res._id) ? "unknown" : "Save"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
            </div>
        )
    }
}

export default Results;