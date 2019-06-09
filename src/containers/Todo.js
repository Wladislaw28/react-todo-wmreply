import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../components/todo-input/ToDoInput'; //текст задачи
import Footer from '../components/footer/Footer';
import ToDoList from '../components/todo-list/ToDoList';//список задач

import {addTask, deleteTask, completeTask, expansionTask, changeFilter} from "../actions/actionCreator";
import './Todo.css';
import tasks from "../reducers/tasks";


class ToDo extends Component {

	state = {
		taskText: ''
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			taskText: value,
		})
	};

	addTask = ({ key }) => {
		const { taskText } = this.state;

		if (taskText.length > 3 && key === 'Enter') {
			const { addTask } = this.props;

			addTask((new Date()).getTime(), taskText, false);

			this.setState({
				taskText: '',
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
		const { activeFilter, taskText } = this.state;
		const { tasks, deleteTask, completeTask, expansionTask, filters, changeFilter } = this.props;
		const isTasksExist = tasks && tasks.length > 0;
		const filteredTasks = this.filterTasks(tasks, filters);
		const taskCounter = this.getActiveTasksCounter(tasks);

		return (
			<div className="todo-wrapper">
				<ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
				{isTasksExist && <ToDoList expansionTask={expansionTask} completeTask={completeTask} tasksList={filteredTasks} deleteTask={deleteTask} />}
				{isTasksExist && <Footer changeFilter={changeFilter} amount={taskCounter} activeFilter={filters} />}
			</div>
		);
	}
}

export default connect(({tasks, filters}) => ({
	tasks,
	filters,
}), { addTask, deleteTask, completeTask, expansionTask, changeFilter})(ToDo);
