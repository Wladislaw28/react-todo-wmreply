import {ADD_TASK, DELETE_TASK} from "../constants";


export const addTask = (id, text, isCompleted) => ({
	type: ADD_TASK,
	id,
	text,
	isCompleted
});

export const deleteTask = id => ({
	type: DELETE_TASK,
	id
});
