let initialState = {
  sort: [
    { id: 1, name: "популярности" },
    { id: 2, name: "цене" },
    { id: 3, name: "алфавиту" },
  ],
  popup: false,
  currentIndex: 0,
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_POPUP":
      return {
        ...state,
        popup: !action.popup,
      };
    case "SORT_ACTIVE":
      return {
        ...state,
        currentIndex: action.index,
      };
    default:
      return state;
  }
};

export default sort;
