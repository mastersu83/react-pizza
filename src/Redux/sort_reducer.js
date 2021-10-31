const OPEN_POPUP = 'OPEN_POPUP';

let initialState = {
	sort: [
		{ id: 1, name: 'популярности' },
		{ id: 2, name: 'цене' },
		{ id: 3, name: 'алфавиту' },
	],
	popup: false,
};

const sortReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_POPUP:
			return {
				...state,
				popup: !action.popup,
			};
		default:
			return state;
	}
};

export const openPopup = (popup) => ({ type: OPEN_POPUP, popup });

export default sortReducer;
