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
    this.searchBook();
  }

  // createBook
  createBook = bookData => {
if (bookData.volumeInfo.imageLinks.thumbnail) {
    return {
      _id: bookData.id,
      title: bookData.volumeInfo.title,
      authors: bookData.volumeInfo.authors,
      description: bookData.volumeInfo.description,
      image: bookData.volumeInfo.imageLinks.thumbnail,
      link: bookData.volumeInfo.previewLink
    }
} else {
    return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: "http://placehold.it/200x300",
        link: bookData.volumeInfo.previewLink
      }
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
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // handleFormSubmit
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBook(this.state.value)
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
            <form>
                <div className="form-group">
                    <label htmlFor="search">
                        <h2>Search books and save favorites</h2>
                    </label>
                    <input
                        className="form-control"
                        placeholder="search a book title"
                        id="search"
                        onChange={this.handleInputChange}
                        value={this.state.value}
                        name="value"
                        type="text" />
                    <button 
                        className="btn btn-dark mt-3 mb-5"
                        onClick={this.handleFormSubmit}>
                            Search
                    </button>     
                </div>
            </form>
        </div>
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