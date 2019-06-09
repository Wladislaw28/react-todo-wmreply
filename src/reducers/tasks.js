import {ADD_TASK, DELETE_TASK, TASKS} from "../constants";

const tasks = (state = TASKS, { id, text, isCompleted, type }) => {
	switch (type) {
		case ADD_TASK :
			return [
				...state, {
					id,
					text,
					isCompleted,
				}
			];
		case DELETE_TASK :
			return [...state].filter(task => task.id !== id);
		default:
			return state;
	}
}

export default tasks;
