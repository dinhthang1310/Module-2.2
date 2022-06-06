import {Book} from "./Book";

export class BookManager {
    books: Book[] = [];

    constructor() {
    }

    addBook(id:string,name:string) {
        let book = new Book(id,name)
        this.books.push(book)
    }

    getList(): Book[] {
        return this.books
    }
    delete(id:string):void {
        let bookDelete = this.search(id);
        if (bookDelete != -1) {
            this.books.splice(bookDelete,1)
        }else {
            throw new Error("ERROR")
        }
    }
    update(id:string,name : string):void {
        for (let i  = 0;i < this.books.length;i++) {
            if (this.books[i].ID == id) {
                this.books[i].name = name
            }else {
                console.log("error")
            }
        }
    }

    search(id:string) {
        let find = -1;
        for (let i = 0;i< this.books.length;i++) {
            if (this.books[i].ID == id) {
                find = 1;
                this.getList()
            }
        }
        return find
    }

    // search(id:string){
    //     let find = false ;
    //     for (let i = 0;i < this.books.length;i++){
    //         if (this.books[i].getID() == id  ){
    //             find =  true;
    //             return this.books[i]
    //         }
    //     } if (find == false ) {
    //         return "errorr"
    //     }
    // }
    // delete(id:string) {
    //     for (let i = 0;i < this.books.length;i++) {
    //         if (this.books[i].ID == id) {
    //             this.books.splice(i,1)
    //         }
    //     }
    // }
    // update(id:string,name :string) {
    //     for (let i = 0;i < this.books.length;i++) {
    //         if (this.books[i].ID == id) {
    //             this.books[i].name = name
    //         }else {
    //             console.log("error")
    //         }
    //     }
    // }


    // updateBook(ID: string, name: string) {
    //     let edit = this.findBook(ID);
    //     if (edit !-1) {
    //         this.books[edit].setName(name);
    //     }else {
    //         console.log("error update")
    //     }
    //
    //
    // }
    // //
    // deleteBook(ID:string) {
    //    let indexDelete = this.findBook(ID);
    //    if (indexDelete != -1) {
    //        this.books.splice(indexDelete,1)
    //    }else {
    //        console.log("error delete")
    //    }
    // }
    // findBook(ID: string) {
    //     let find = -1;
    //     for (let i = 0;i < this.books.length;i++) {
    //         if (ID === this.books[i].ID) {
    //             find = i
    //         }
    //         return find;
    //     }
    //
    // }

    // findBook(ID:string) {
    //     for (let i =0 ;i < this.books.length;i++) {
    //         if (ID === this.books[i].getID()) {
    //             return  this.books[i]
    //         }
    //
    //     }
    // }

}



