const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    name:{type:String, unique:true},
    Author: String,
    amazon: String

});
const book = mongoose.model('book', bookSchema); 
module.exports = book; 

book.create(
    {
        name: "The Davinci Code",
        Author: "Dan Brown",
        amazon: "https://www.amazon.ca/Vinci-Code-Dan-Brown/dp/0307474275"
    },
    {
        name: "The Great Gatsby",
        Author: "Francis Scott Key Fitzgerald",
        amazon: "https://www.amazon.ca/Great-Gatsby-F-Scott-Fitzgerald/dp/1843441306"
    },
    {
        name: "A tale of 2 cities",
        Author: "Charles Dickens",
        amazon: "https://www.amazon.ca/Tale-Two-Cities-Charles-Dickens-ebook/dp/B004EHZXVQ"
    },
    function (error, savedDocument){
        if (error) console.log(error);
        console.log(savedDocument);
    }
);