import { useSelector } from 'react-redux';
import Book from '../components/Books';

const BooksList = () => {
  const books = useSelector((state) => state);
  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map((book) => (
              <tr key={book.id}>
                <Book book={book} />
              </tr>
            ))
           }
        </tbody>
      </table>
    </div>
  );
};

export default BooksList;
