import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../components/todo-input/input/ToDoInput';
import Button from '../components/todo-input/button/Button';
import Footer from '../components/footer/Footer';
import ToDoList from '../components/todo-list/ToDoList';

import {addTask, deleteTask, completeTask, changeFilter} from "../actions/actionCreator";
import './Todo.css';

class ToDo extends Component {

	state = {
		taskText: '',
		taskData: ''
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			taskText: value,
		})
	};

	handleInputDataChange = ({ target: { value } }) => {
		this.setState({
			taskData: value,
		})
	};

	addTask = (e) => {
		e.preventDefault();
		const { taskText, taskData } = this.state;

		if (taskText.length > 3) {
			const { addTask } = this.props;

			addTask((new Date()).getTime(), taskText, taskData, false);

			this.setState({
				taskText: '',
				taskData: ''
			})
		}
	};

	getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

	filterTasks = (tasks, activeFilter) => {
		switch (activeFilter) {
			case 'completed':
				return tasks.filter(task => task.isCompleted);
			case 'active':
				return tasks.filter(task => !task.isCompleted);
			default:
				return tasks;
		}
	};

	render() {
		const { taskText, taskData } = this.state;
		const { tasks, deleteTask, completeTask, filters, changeFilter } = this.props;
		const isTasksExist = tasks && tasks.length > 0;
		const filteredTasks = this.filterTasks(tasks, filters);
		const taskCounter = this.getActiveTasksCounter(tasks);

		return (
			<div className="todo-wrapper">
				<div className="todo-form">
					<ToDoInput onChange={this.handleInputChange} value={taskText} type="text" />
					<ToDoInput onChange={this.handleInputDataChange} value={taskData} type="date" />
					<Button onClick={this.addTask}>Add task</Button>
					<Button>Clear Complete Task</Button>

					{console.log(tasks.length)}
				</div>
				{isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
				{isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} deleteTask={deleteTask} />}
			</div>
		);
	}
}

export default connect(({tasks, filters}) => ({
	tasks,
	filters,
}), { addTask, deleteTask, completeTask, changeFilter})(ToDo);
