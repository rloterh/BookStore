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

  return (
    <>
      <div>Books Form</div>

      <form>
        <input type="text" name="title" className="input" />
        <select name="category">
          {options}
        </select>
        <button type="submit" className="btn">Add Book</button>
      </form>

    </>
  );
};

export default BooksForm;
