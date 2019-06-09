import React from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

const ToDoItem = ({text, isCompleted, deleteTask, completeTask, id }) => (
	<li className="todo-item">
		<i onClick={ () => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
		<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
		<i onClick={ () => deleteTask(id) } className="fas fa-times" />
	</li>
);

ToDoItem.propTypes = {
	text: PropTypes.string,
	isCompleted: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.string
};

ToDoItem.defaultProps = {
	text: '',
	isCompleted: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: ''
};

export default ToDoItem;
