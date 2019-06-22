import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from '../todo-item/ToDoItem';
import ToDoItemDate from '../todo-item/timer/ToDoItemDate';
import './ToDoList.css';

const ToDoList = ({tasksList, deleteTask, completeTask}) => {

		if (tasksList.data !== ''){
			return(
				<ul className="todo-list">
					{tasksList.map(({ id, text, data, isCompleted }) => (
						<ToDoItemDate completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} data={data}
						isCompleted={isCompleted} />
					))}
				</ul>
			)
		} else {
			return(
				<ul className="todo-list">
					{tasksList.map(({ id, text, isCompleted }) => (
						<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
						isCompleted={isCompleted} />
					))}
				</ul>
			)
		}





		{/*<ul className="todo-list">*/}
			{/*{tasksList.map(({ id, text, data, isCompleted }) => (*/}
				{/*<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}*/}
						  {/*isCompleted={isCompleted} />,*/}
				{/*<ToDoItemDate completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text} data={data}*/}
							  {/*isCompleted={isCompleted} />*/}
			{/*))}*/}
		{/*</ul>*/}
};

ToDoList.propTypes = {
	tasksList: PropTypes.array,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func
};

ToDoList.defaultProps = {
	tasksList: [],
	deleteTask: () => {},
	completeTask: () => {}
};


export default ToDoList;

