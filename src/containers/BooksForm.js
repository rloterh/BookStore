const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const options = categories.map((category) => (
    <option value={category} key={category}>
      {category}
    </option>
  ));

  return (
    <form>
      <input type="text" name="title" id="title" className="input" />
      <select>
        {options}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BooksForm;
