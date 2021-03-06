import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import bookReducer from './reducers/books';
import filterBookReducer from './reducers/filter';

const rootReducer = combineReducers({
  books: bookReducer,
  filter: filterBookReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

reportWebVitals();
