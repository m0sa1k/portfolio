let initialState = [
	{
		name : 'HTML',
		imgPath : 'https://vignette.wikia.nocookie.net/wikies/images/0/05/HTML5_logo.png/revision/latest?cb=20170512222450&path-prefix=ru'
	},
	{
		name : 'CSS',
		imgPath : 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png'
	},
	{
		name:'JavaScript',
		imgPath : 'https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png'
	},
	{
		name : 'MySQL',
		imgPath : 'https://upload.wikimedia.org/wikipedia/ru/d/d3/Mysql.png'
	}];

export const SkillsReducer = (state = initialState, action) => {
	if (action.type === 'ADD_SKILL') {
		return [...state, {
			name : action.payload.name,
			imgPath : action.payload.imgPath
		}];
	} else if (action.type === 'REMOVE_SKILL') {
		return state.filter( (skill, index) => (index !== action.payload) );
	}
	return state;
};