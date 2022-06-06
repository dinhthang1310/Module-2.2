import {BookList} from "./BookList";

let book1 = new BookList("Tat den","ngo tat to",true);
let book2 = new BookList("de men phuu luu ki","to hoai",false);

let books:BookList[] = [];
books.push(book2,book1);

for (let i = 0;i < books.length;i++) {
    let book = books[i];
    let bookInfo = `${book.title} by ${book.author}`
    if (book.alreadyRead) {
        console.log(`sach da doc : ${bookInfo}` )
    } else {
        console.log(`sach chua doc : ${bookInfo}`  )
    }
}