import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, CHANGE_FILTER} from "../constants";



export const addTask = (id, text, data, isCompleted) => ({
	type: ADD_TASK,
	id,
	text,
	data,
	isCompleted,
});

export const deleteTask = id => ({
	type: DELETE_TASK,
	id
});

export const completeTask = id => ({
	type: COMPLETE_TASK,
	id
});


export const changeFilter = activeFilter => ({
	type: CHANGE_FILTER,
	activeFilter
});
