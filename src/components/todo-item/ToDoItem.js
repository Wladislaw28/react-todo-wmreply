import React from 'react';
import PropTypes from 'prop-types';

import './ToDoItem.css';

const ToDoItem = ({text, data, description, responsible, isCompleted, deleteTask, completeTask, id }) => (

	<div className="todo-item-div">
		<li  className='todo-item'>
			<i onClick={ () => completeTask(id) } className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
			<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
			<span className={isCompleted ? 'completed text' : 'text'}>{responsible}</span>
			<span className={isCompleted ? 'completed text' : 'text'}>{data}</span>
			<p className={isCompleted ? 'completed text' : 'text'}>{description}</p>
			<i onClick={ () => deleteTask(id) } className="fas fa-times" />
		</li>
	</div>
);

ToDoItem.propTypes = {
	text: PropTypes.string,
	data: PropTypes.string,
	description: PropTypes.string,
	responsible: PropTypes.string,
	isCompleted: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.number
};

ToDoItem.defaultProps = {
	text: '',
	data: '1999-08-30',
	description: '',
	responsible: '',
	isCompleted: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: 0
};

export default ToDoItem;
