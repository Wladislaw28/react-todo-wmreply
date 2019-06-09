import {ADD_TASK, DELETE_TASK, COMPLETE_TASK, EXPANSION_TASK, CHANGE_FILTER} from "../constants";


export const addTask = (id, text, isCompleted, isExpansion) => ({
	type: ADD_TASK,
	id,
	text,
	isCompleted,
	isExpansion
});

export const deleteTask = id => ({
	type: DELETE_TASK,
	id
});

export const completeTask = id => ({
	type: COMPLETE_TASK,
	id
});

export const expansionTask = id => ({
	type: EXPANSION_TASK,
	id
});

export const changeFilter = activeFilter => ({
	type: CHANGE_FILTER,
	activeFilter
});
