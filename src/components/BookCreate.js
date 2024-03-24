import { useState } from "react";
import "../index.css";
import useBooksContext from "../hooks/books-context";

function BookCreate() {
  const [title, setTitle] = useState("");

  const { createBook } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Input Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
