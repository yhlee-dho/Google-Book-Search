import axios from "axios";

// google API
export default {
    // get, post, delete, get saved
    getBook: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData).then(res => res.data);
    },
    deleteBook: function(id) {
        return axios.delete("api/books/" + id).then(res => res.data);
    },
    savedBooks: function() {
        return axios.get("api/books").then(res => res.data);
    }

};