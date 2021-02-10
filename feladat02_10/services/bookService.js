let bookList = [];

const bookService = {
  save: (book) => {
    book.id = bookList.length + 1;
    bookList.push(book);
  },

  getBookList: () => bookList,

  delete: (id) => {
    bookList = bookList.filter((book) => {
      if (book.id !== id) {
        return book;
      }
    });
  },

  getBook: (id) => {
    return bookList.find((book) => book.id === id);
  },

  updateBook: (updatedBook) => {
    let oldBook = bookList.find((book) => book.id === updatedBook.id);
    for (const key in updatedBook) {
      if (oldBook.hasOwnProperty(key)) {
        oldBook[key] = updatedBook[key];
      }
    }
  },
};

module.exports = bookList;
