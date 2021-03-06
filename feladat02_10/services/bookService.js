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

  updateBook: (id, updatedBook) => {
    const oldBook = bookList.find((book) => {
      return book.id === id;
    });
    console.log(oldBook);
    for (const key in updatedBook) {
      if (oldBook.hasOwnProperty(key)) {
        oldBook[key] = updatedBook[key];
        /* return bookList[updatedBook.id].  */
      }
    }
    return oldBook;
  },
};

module.exports = bookService;
