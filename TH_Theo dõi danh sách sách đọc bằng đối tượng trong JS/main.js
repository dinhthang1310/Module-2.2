"use strict";
exports.__esModule = true;
var BookList_1 = require("./BookList");
var book1 = new BookList_1.BookList("Tat den", "ngo tat to", true);
var book2 = new BookList_1.BookList("de men phuu luu ki", "to hoai", false);
var books = [];
books.push(book2, book1);
for (var i = 0; i < books.length; i++) {
    var book = books[i];
    var bookInfo = "".concat(book.title, " by ").concat(book.author);
    if (book.alreadyRead) {
        console.log("sach da doc : ".concat(bookInfo));
    }
    else {
        console.log("sach chua doc : ".concat(bookInfo));
    }
}
