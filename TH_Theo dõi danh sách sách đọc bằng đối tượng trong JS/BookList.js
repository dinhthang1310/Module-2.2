"use strict";
exports.__esModule = true;
exports.BookList = void 0;
var BookList = /** @class */ (function () {
    function BookList(title, author, alreadyRead) {
        this._title = title;
        this._author = author;
        this._alreadyRead = alreadyRead;
    }
    Object.defineProperty(BookList.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BookList.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BookList.prototype, "alreadyRead", {
        get: function () {
            return this._alreadyRead;
        },
        set: function (value) {
            this._alreadyRead = value;
        },
        enumerable: false,
        configurable: true
    });
    return BookList;
}());
exports.BookList = BookList;
