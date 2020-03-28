import axios from "axios";

// google API
export default {
    // get, post, delete, get saved
    getBook: (query) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    },
    saveBook: (bookData) => {
        return axios.post("/api/books", bookData).then(res => res.data);
    },
    deleteBook: (id) => {
        return axios.delete("api/books/" + id).then(res => res.data);
    },
    savedBooks: () => {
        return axios.get("api/books").then(res => res.data);
    }

};