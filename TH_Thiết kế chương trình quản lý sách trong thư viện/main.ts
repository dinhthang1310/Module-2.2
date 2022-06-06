import {BookManager} from "./BookManager";
import {Book} from "./Book";

let bookManager = new BookManager();
bookManager.addBook("1","rung xa nu")
bookManager.addBook("2","chiec thuyen ngoai xa")
bookManager.addBook("3","tam cam")

// bookManager.updateBook("1","7 chu lun")
// bookManager.delete("1")
// bookManager.findBook("1")
bookManager.search("2")
bookManager.update("2","harry poster")
console.table(bookManager.getList())