export const addHobby = (hobby) => {
	return {
		type : 'ADD_HOBBY',
		payload : hobby
	};
};

export const removeHobby = (id) => {
	return {
		type : 'REMOVE_HOBBY',
		payload : id
	};
};

export const addSkill = (hobby) => {
	return {
		type : 'ADD_SKILL',
		payload : hobby
	};
};

export const removeSkill = (id) => {
	return {
		type : 'REMOVE_SKILL',
		payload : id
	};
};