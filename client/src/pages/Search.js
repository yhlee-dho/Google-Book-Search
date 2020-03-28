import React from "react";
import Form from "../components/Form";
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
    this.searchBook();
  }

  // createBook
  createBook = bookData => {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
  }

  // searchBook
  searchBook = query => {
    API.getBook(query)
      .then(res => this.setState({ 
        books: res.data.items.map(bookData => this.createBook(bookData))
      }))
      .catch(err => console.log(err));
  };

  // handleInputChange
  handleInputSubmit = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.search)
  };

  render() {
    return (
      <div>
        <Form
          search={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.state.books} />
        <div className="container">
          <h2>Results</h2>
          <Results books={this.state.books} />
        </div>
      </div>
    )
  }

}

export default Search;