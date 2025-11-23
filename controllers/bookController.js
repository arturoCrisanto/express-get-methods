import books from "../models/book.js";

// Get all books
export const getAllBooks = (req, res) => {
  try {
    //pag kita kon may sulod it books
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getBookById = (req, res) => {
  try {
    const { id } = req.params;
    const book = books.find((b) => b.id === parseInt(id));

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const getbyGenre = (req, res) => {
  try {
    const { genre } = req.params;

    const filteredBooks = books.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
    if (filteredBooks.length === 0) {
      return res.status(404).json({ message: "No books found for this genre" });
    }
    res.status(200).json(filteredBooks);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
