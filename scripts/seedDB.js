const mongoose = require("mongoose");
const db = require("../models");

// starter book selection for testing

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/resetbooks"
);

const bookSeed = {
    title: "The Google story",
    authors: ["David A. Vise", "Mark Malseed"],
    description: "blahblahblah",
    image: "https://books.google.com/books?id=zyTCAlFPjgYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books?id=zyTCAlFPjgYC&ie=ISO-8859-1&source=gbs_api"
}

db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " has been inserted into list");
        process.exit((0));
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });