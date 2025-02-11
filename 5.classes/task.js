 /*Задание 1*/

 class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}

	fix() {
		this.state *= 1.5;
	}

	set state(count) {
		if (count < 0) {
			this.state = 0;
		} else if (count > 100) {
			this.state = 100;
		} else {
			this._state = count;
		}
	}
	get state() {
		return this._state;
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount);
		this.type = "novel";
		this.author = author;
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount);
		this.type = "fantastic";
		this.author = author;
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
		super(name, releaseDate, pagesCount);
		this.type = "detective";
		this.author = author;
	}
}

      /*Задание 2*/

      class Library {
        constructor(name, books) {
            this.name = name;
            this.books = [];
        }
   
        addBook(book) {
            if (book.state > 30) {
                this.books.push(book);
            }
        }
        findBookBy(type, value) {
            let findBook = this.books.find(book => book[type] === value);
            if (typeof findBook === 'object') {
                return findBook;
            } else {
                return null;
            }
        }
   
        giveBookByName(bookName) {
            let giveBoook = this.books.find(book => book.name === bookName);
            if (typeof giveBoook === 'object') {
                let index = this.books.indexOf(giveBoook);
                this.books.splice(index, 1);
                return giveBoook;
            } else {
                return null;
            }
        }
    }
