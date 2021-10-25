const initialState = [
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'React Fundamentals',
    category: 'Learning - Beginner',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'React for Developers',
    category: 'Learning - Intermediate',
  },
  {
    id: Math.ceil(Math.random() * 1000),
    title: 'React for Professionals',
    category: 'Learning - Advanced',
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
