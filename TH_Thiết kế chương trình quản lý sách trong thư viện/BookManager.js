"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var Book_1 = require("./Book");
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (id, name) {
        var book = new Book_1.Book(id, name);
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype["delete"] = function (id) {
        var bookDelete = this.search(id);
        if (bookDelete != -1) {
            this.books.splice(bookDelete, 1);
        }
        else {
            throw new Error("ERROR");
        }
    };
    BookManager.prototype.update = function (id, name) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].ID == id) {
                this.books[i].name = name;
            }
            else {
                console.log("error");
            }
        }
    };
    BookManager.prototype.search = function (id) {
        var find = -1;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].ID == id) {
                find = 1;
                this.getList();
            }
        }
        return find;
    };
    return BookManager;
}());
exports.BookManager = BookManager;
