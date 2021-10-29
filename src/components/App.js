import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import NavBar from './Navbar';

const App = () => (
  <div className="App">
    <div className="container mt-5">
      <NavBar />
      <BooksList />
      <BooksForm />
    </div>

  </div>
);

export default App;
