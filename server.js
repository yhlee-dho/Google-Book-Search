const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static assets for heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// api route
app.use(routes)

// mongo connection - update with heroku stuff when the time arrives
mongoose.connect(process.env.MONGODB_URI || "mongodb://user123:user123@ds119394.mlab.com:19394/heroku_nv8npsfv", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

app.listen(PORT, () => {
    console.log(`API server is now online on port ${PORT} !!!`);
});