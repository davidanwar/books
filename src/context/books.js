import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();
function Provider({ children }) {
  const [books, setBook] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  };

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    console.log(response);

    const updatedBooks = [...books, response.data];
    setBook(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    console.log(response);
    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });

    setBook(updatedBook);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBook = books.filter((book) => {
      return book.id !== id;
    });

    setBook(updatedBook);
  };

  const objectSharing = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={objectSharing}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
