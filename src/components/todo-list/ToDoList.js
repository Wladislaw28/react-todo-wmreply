import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/ToDoItem';
import './ToDoList.css';

const ToDoList = ({tasksList, deleteTask, completeTask}) => (
	<ul className="todo-list">
		{tasksList.map(({ id, text, isCompleted }) => (
			<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} isCompleted={isCompleted} />
		))}
	</ul>
);

ToDoList.propTypes = {
	tasksList: PropTypes.array,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func
}

ToDoList.defaultProps = {
	tasksList: [],
	deleteTask: () => {},
	completeTask: () => {}
}

export default ToDoList;

