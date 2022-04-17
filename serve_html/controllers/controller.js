const book = require("../models/bookmodel");

exports.sendReqParam = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    // res.render("home");
    book.find( {}, (error, data) => {
        if (data) res.render("home", {data: data});
    });
};

exports.sendcss = (req, res) => {
    res.sendFile(`./public/css/lab10.css`, {root:"./"});
    
};

exports.sendbook = (req, res) => {
    let page = req.params.page;
    // res.render(book);
    console.log(page);
    book.find( {}, (error, data) => {
        if(data) res.render(page, {data: data[page - 1]});
    });
    //res.sendFile(`./public/images/davinci.jpg`, {root:"./"})
};

exports.sendDelete = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    // res.render("home");
    book.find( {}, (error, data) => {
        if (data) res.render("deleteABook", {data: data});
    });
};

exports.sendAdd = (req, res) => {
    // res.sendFile(`./views/index.html`, {root:"./"});
    // res.render("home");
   res.render("addNewBook", {data: new book});
};




