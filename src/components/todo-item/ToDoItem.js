import React from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

const ToDoItem = ({text, isCompleted, isExpansion, deleteTask, completeTask, expansionTask, id }) => (

	<li onClick={ () => expansionTask(id) } className={isExpansion ? 'todo-item-exp' : 'todo-item'}>
		<i onClick={ () => completeTask(id) } className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
		<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
		{/*<button onClick={ () => expansionTask(id) } className={isExpansion ? 'todo-item-exp' : 'todo-item'}>Edit</button>*/}
		<i onClick={ () => deleteTask(id) } className="fas fa-times" />
	</li>

);

ToDoItem.propTypes = {
	text: PropTypes.string,
	isCompleted: PropTypes.bool,
	isExpansion: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.number
};

ToDoItem.defaultProps = {
	text: '',
	isCompleted: false,
	isExpansion: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: 0
};

export default ToDoItem;
