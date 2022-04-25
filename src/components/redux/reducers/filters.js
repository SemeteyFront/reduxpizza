const initialState = {
  sortBy: 'popular',
  category: 0,
};

export const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };
    case 'SET_CATEGORY':
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
