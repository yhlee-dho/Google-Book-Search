import React from "react";
// import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

// React.Component{}
class Search extends React.Component {

  // set initial state
  state = {
    value: "",
    books: []
  };

  // componentDidMount
  componentDidMount() {
    API.savedBooks()
        .then(savedBooks => this.setState({ books: savedBooks }))
        .catch(err => console.log(err));
}


  // handleFormSubmit
  handleBookDelete = event => {
    event.preventDefault();
    API.deleteBook(book._id)
        .then(deletedBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deletedBook._id) }))
        .catch(err => console.log(err))
  };

  render() {
    console.log(this.state.books);
    return (
      <div>

      {/* 
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />
      
       */}
        <div className="container">
          <h2>Results</h2>
          {this.state.books.length ? (
          <Results books={this.state.books} />
          ) : (
            null
          )}
          {/* <Results books={this.state.books} /> */}
        </div>
      </div>
    )
  }

}

export default Search;