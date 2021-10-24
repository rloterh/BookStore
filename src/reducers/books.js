const initialState = [
  {
    id: Math.random(),
    title: 'React Fundamentals',
    category: 'Learning - Beginner',
  },
  {
    id: Math.random(),
    title: 'React for Developers',
    category: 'Learning - Intermediate',
  },
  {
    id: Math.random(),
    title: 'Reacr for Professionals',
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
