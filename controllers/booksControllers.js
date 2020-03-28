const db = require("../models");

// methods
module.exports = {
    // findAll
    findAll: (req, res) => {
        // find, sort, save
        db.Book
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    // findById
    findById: (req, res) => {
        // findById, save
        db.Book
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    // create
    create: (req, res) => {
        // create, save
        db.Book
            .create(req.Body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    // update
    update: (req, res) => {
        // findOneAndUpdate, save
        db.Book
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    },
    // remove
    remove: (req, res) => {
        // findById, remove, save
        db.Book
            .findById({ _id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => {
                console.log(err)
                res.status(422).json(err)
            });
    }
};