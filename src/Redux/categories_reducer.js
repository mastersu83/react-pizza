let initialState = {
	categories: [
		{ id: 1, name: 'Мясные' },
		{ id: 2, name: 'Вегетарианская' },
		{ id: 3, name: 'Гриль' },
		{ id: 4, name: 'Острые' },
		{ id: 5, name: 'Закрытые' },
	],
};

const categoriesReducer = (state = initialState, action) => {
	return state;
};
export default categoriesReducer;
