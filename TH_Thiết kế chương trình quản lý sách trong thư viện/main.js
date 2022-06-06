"use strict";
exports.__esModule = true;
var BookManager_1 = require("./BookManager");
var bookManager = new BookManager_1.BookManager();
bookManager.addBook("1", "rung xa nu");
bookManager.addBook("2", "chiec thuyen ngoai xa");
bookManager.addBook("3", "tam cam");
// bookManager.updateBook("1","7 chu lun")
// bookManager.delete("1")
// bookManager.findBook("1")
bookManager.search("2");
bookManager.update("2", "harry poster");
console.table(bookManager.getList());
