const OPEN_POPUP = 'OPEN_POPUP';
const SORT_ACTIVE = 'SORT_ACTIVE';

let initialState = {
	sort: [
		{ id: 1, name: 'популярности' },
		{ id: 2, name: 'цене' },
		{ id: 3, name: 'алфавиту' },
	],
	popup: false,
	currentIndex: 0,
};

const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_POPUP:
			return {
				...state,
				popup: !action.popup,
			};
		case SORT_ACTIVE:
			return {
				...state,
				currentIndex: action.index,
			};
		default:
			return state;
	}
};

export const openPopup = (popup) => ({ type: OPEN_POPUP, popup });
export const sortActive = (index) => ({ type: SORT_ACTIVE, index });

export default sortReducer;
