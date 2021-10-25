import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CREATE_BOOK } from '../actions/index';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  const [book, setBook] = useState({ title: '', category: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const cloneBook = { ...book };
    cloneBook[e.target.name] = e.target.value;
    setBook(cloneBook);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cloneBook = { ...book };
    if (book.category === '') {
      cloneBook.category = 'Action';
    }
    cloneBook.id = Math.ceil(Math.random() * 1000);
    dispatch(CREATE_BOOK(cloneBook));
    setBook({ title: '', category: '' });
  };

  return (
    <>
      <div>Books Form</div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} className="input" />
        <select name="category" onChange={handleChange}>
          {options}
        </select>
        <button type="submit" className="btn">Add Book</button>
      </form>

    </>
  );
};

export default BooksForm;
