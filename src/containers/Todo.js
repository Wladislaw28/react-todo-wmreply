import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../components/todo-input/input/ToDoInput';
import ToDoSelect from '../components/todo-input/select/ToDoSelect';
import ToDoTextArea from '../components/todo-input/textarea/ToDoTextArea';
import Footer from '../components/footer/Footer';
import ToDoList from '../components/todo-list/ToDoList';

import {addTask, deleteTask, completeTask, changeFilter} from "../actions/actionCreator";
import './Todo.css';

class ToDo extends Component {

	state = {
		taskText: '',
		textAreaText: '',
		taskData: '',
		selectText: ''
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

	handleSelectChange = ({ target: { value } }) => {
		this.setState({
			selectText: value,
		})
	};

	handleTextAreaChange = ({ target: { value } }) => {
		this.setState({
			textAreaText: value,
		})
	};

	addTask = (e) => {
		e.preventDefault();
		const { taskText, textAreaText, taskData, selectText } = this.state;

		if (taskText.length > 3) {
			const { addTask } = this.props;

			addTask((new Date()).getTime(), taskText, taskData, textAreaText, selectText, false);

			this.setState({
				taskText: '',
				taskData: '',
				textAreaText: '',
				selectText: ''
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
		const { taskText, textAreaText, taskData, selectText } = this.state;
		const { tasks, deleteTask, completeTask, filters, changeFilter } = this.props;
		const isTasksExist = tasks && tasks.length > 0;
		const filteredTasks = this.filterTasks(tasks, filters);
		const taskCounter = this.getActiveTasksCounter(tasks);

		return (
			<div className="todo-wrapper">
				<ToDoInput onChange={this.handleInputChange} value={taskText} type="text" />
				<ToDoInput onChange={this.handleInputDataChange} value={taskData} type="date" />
				<ToDoTextArea value={textAreaText} onChange={this.handleTextAreaChange} />
				<ToDoSelect value={selectText} onChange={this.handleSelectChange} />
				<button onClick={this.addTask}>Add</button>

				{isTasksExist && <ToDoList completeTask={completeTask} tasksList={filteredTasks} deleteTask={deleteTask} />}
				{isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
			</div>
		);
	}
}

export default connect(({tasks, filters}) => ({
	tasks,
	filters,
}), { addTask, deleteTask, completeTask, changeFilter})(ToDo);
