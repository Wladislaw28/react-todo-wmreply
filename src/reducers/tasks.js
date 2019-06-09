import {ADD_TASK, COMPLETE_TASK, DELETE_TASK, TASKS} from "../constants";

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
		case COMPLETE_TASK :
			return [...state].map(task => {
				if( task.id === id){
					task.isCompleted = !task.isCompleted;
				}
				return task;
			});
		default:
			return state;
	}
}

export default tasks;
