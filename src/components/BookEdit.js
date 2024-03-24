import { useState } from "react";
import useBooksContext from "../hooks/books-context";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBookById(book.id, title);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="book-edit">
        <label>Title</label>
        <input value={title} onChange={handleChange} className="input" />
        <button className="button is-primary">Edit</button>
      </form>
    </div>
  );
}

export default BookEdit;
