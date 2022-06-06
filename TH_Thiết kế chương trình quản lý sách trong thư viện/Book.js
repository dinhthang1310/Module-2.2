"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(ID, name) {
        this.ID = ID;
        this.name = name;
    }
    Book.prototype.getID = function () {
        return this.ID;
    };
    Book.prototype.setID = function (value) {
        this.ID = value;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (value) {
        this.name = value;
    };
    return Book;
}());
exports.Book = Book;
