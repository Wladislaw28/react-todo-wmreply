import React, {Component} from 'react';

import './ToDoSub.css';
import ToDoInput from "../todo-input/input/ToDoInput";
import Button from "../todo-input/button/Button";
import ToDoListSub from './ToDoListSub';

class ToDoSub extends React.Component{

	state = {
		subtaskText: ''
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			subtaskText: value,
		})
	};

	addSubTask = e => {
		e.preventDefault();

	};

	render(){
		const {subtaskText} = this.state;
		const {completeTask, text, id, deleteTask, isCompleted, isExpansion} = this.props;
		return(
			<div className="todo-item-sub">
				<li className="todo-item">
					<i onClick={ () => completeTask(id) }
					   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
					<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
					<div className="sub-todo">
						<div className="sub-todo-form">
							<ToDoInput onChange={this.handleInputChange} value={subtaskText} type="text"
									   className="input__field__subtask" />
							<Button onClick={this.addSubTask} className="button-subtask">Add task</Button>
						</div>
						<ToDoListSub />
					</div>
					<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				</li>
			</div>
		)
	}
}

export default ToDoSub;
