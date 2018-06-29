import React from 'react';

export const Data = (props) => {
	return (
		<div>
			<p>Имя : {props.firstname}</p>
			<p>Фамилия : {props.lastname}</p>
			<p>Возраст : {props.age}</p>
			<p>Обрвзование : {props.education}</p>
		</div>
	);
}