export class Book {
     ID:string;
     name: string;

    constructor(ID: string, name: string) {
        this.ID = ID;
        this.name = name;
    }

    getID(): string {
        return this.ID;
    }

    setID(value: string) {
        this.ID = value;
    }

    getName(): string {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }
}