import React from "react";

function Form(props) {
    return(
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
                        onChange={props.handleInputChange}
                        value={props.search}
                        name="search"
                        type="text" />
                    <button 
                        className="btn btn-dark mt-3 mb-5"
                        onClick={props.handleFormSubmit}>
                            Search
                    </button>     
                </div>
            </form>
        </div>
    )
}

export default Form;