const book = require("../models/bookmodel");

module.exports = {
    index: (req, res) => {
        book.find({})
            .then(Book => {
                res.render("Book/home",{
                    Book: Book 
                })  
            })
            .catch(error => {
                console.log(`Error fetching Book: ${error.message}`)
                res.redirect("/home");
            })
    },
    new: (req, res) => {
        res.render("Book/new");
    },

    create: (req, res, next) => {
        let bookParams = {
            name: req.body.name, 
            Author: req.body.Author,
            amazon: req.body.amazon
        };

        book.create(bookParams)
            .then(Book => {
                res.locals.redirect = "/home";
                res.locals.Book = Book;
                next();   
            })
            .catch(error =>{
                console.log(`Error saving Book: ${error.message}`);
                next(error);
            });
    },
    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect; 
        if (redirectPath) res.redirect(redirectPath);
        else next();
    },

    delete: (req, res, next) => {
        let BookID = req.params.BookID;
        console.log(BookID);
        book.findOneAndDelete({name: BookID})
            .then(() => {
                res.locals.redirect = "/home";
                next();
            })
            .catch(error => {
                console.log(`Error deleting user by ID: ${error.message}`);
                next();
            });

    }
    


}