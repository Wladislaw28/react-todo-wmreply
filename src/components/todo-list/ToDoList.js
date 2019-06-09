import React from 'react';
import PropTypes from 'prop-types';

import ToDoItem from '../todo-item/ToDoItem';
import './ToDoList.css';

const ToDoList = ({tasksList, deleteTask, completeTask, expansionTask}) => (
	<ul className="todo-list">
		{tasksList.map(({ id, text, isCompleted, isExpansion }) => (
			<ToDoItem expansionTask={expansionTask} completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} isCompleted={isCompleted} isExpansion={isExpansion} />
		))}
	</ul>
);

ToDoList.propTypes = {
	tasksList: PropTypes.array,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	expansionTask: PropTypes.func
}

ToDoList.defaultProps = {
	tasksList: [],
	deleteTask: () => {},
	completeTask: () => {},
	expansionTask: () => {}
}

export default ToDoList;

