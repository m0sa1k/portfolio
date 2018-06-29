let initialState = ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'];

export const SkillsReducer = (state = initialState, action) => {
	if (action.type === 'ADD_SKILL') {
		return [...state, action.payload];
	} else if (action.type === 'REMOVE_SKILL') {
		return state.filter( (skill, index) => (index !== action.payload) );
	}
	return state;
};