import BookCard from "./BookCard";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  if (books.length < 2) {
    return;
  }
  return (
    <section className={containerClassName}>
      <h2 className="font-bebas-neue text-4xl text-light-100">
        <ul className="book-list">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </ul>
      </h2>
    </section>
  );
};

export default BookList;
