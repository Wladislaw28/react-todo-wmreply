import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, EXPANSION_TASK} from "../constants";
import {load} from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
	TASKS = {
		tasks: [],
	}
}

const tasks = (state = TASKS.tasks, { id, text, isCompleted, isExpansion, type }) => {
	switch (type) {
		case ADD_TASK :
			return [
				...state, {
					id,
					text,
					isCompleted,
					isExpansion,
				}
			];
		case DELETE_TASK :
			return [...state].filter(task => task.id !== id);
		case COMPLETE_TASK :
			return [...state].map(task => {
				if( task.id === id){
					task.isCompleted = !task.isCompleted;
				}
				return task;
			});
		case EXPANSION_TASK:
			return [...state].map(task => {
				if (task.id === id) {
					task.isExpansion = !task.isExpansion;
				}
				return task;
			});
		default:
			return state;
	}
}

export default tasks;
