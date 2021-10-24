import PropTypes from "prop-types";

const Book = ({ book }) => (
    <>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </>
  );

  Book.propTypes = {
    book: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  };

export default Book;
