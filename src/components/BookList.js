import BookShow from "./BookShow";
import useBooksContext from "../hooks/books-context";

function Booklist() {
  const { books } = useBooksContext();

  const bookRendered = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{bookRendered}</div>;
}

export default Booklist;
