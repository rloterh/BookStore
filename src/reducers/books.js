const initialState = [
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'React for Professionals',
    category: 'Learning',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'Alpha Blocks',
    category: 'Kids',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'Technology of 2072',
    category: 'Sci-Fi',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
