export class BookList {
    private _title : string;
    private _author : string;
    private _alreadyRead : boolean;


    constructor(title: string, author: string, alreadyRead: boolean) {
        this._title = title;
        this._author = author;
        this._alreadyRead = alreadyRead;
    }


    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }

    get alreadyRead(): boolean {
        return this._alreadyRead;
    }

    set alreadyRead(value: boolean) {
        this._alreadyRead = value;
    }
}