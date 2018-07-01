let initialState = [
	'Web-программирование',
	'Frontend-разработка'
];

export const HobbiesReducer = (state = initialState, action) => {
	if (action.type === 'ADD_HOBBY') {
		return [...state, action.payload];
	} else if (action.type === 'REMOVE_HOBBY') {
		return state.filter( (hobby, index) => (index !== action.payload) );
	}
	return state;
};
