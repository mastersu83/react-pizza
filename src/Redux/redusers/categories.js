let initialState = {
  categories: [
    { id: 0, name: "Все", categories: 0 },
    { id: 1, name: "Мясные", categories: 1 },
    { id: 2, name: "Вегетарианская", categories: 2 },
    { id: 3, name: "Гриль", categories: 3 },
    { id: 4, name: "Острые", categories: 4 },
    { id: 5, name: "Закрытые", categories: 5 },
  ],
  currentIndex: 0,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case "CATEGORIES_ACTIVE":
      return {
        ...state,
        currentIndex: action.index,
      };
    default:
      return state;
  }
};

export default categories;
