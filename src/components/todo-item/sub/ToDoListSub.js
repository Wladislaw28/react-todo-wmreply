import React from 'react';

import './ToDoListSub.css';

const ToDoListSub = ({}) => (
	<ul className="todo-list">
		{tasksList.map(({ id, text, data, isCompleted }) => (
			<ToDoItem completeTask={completeTask} deleteTask={deleteTask} id={id} key={id} text={text}
			isCompleted={isCompleted} />
		))}
	</ul>
);

export default ToDoListSub;
