import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToDoInput from '../components/todo-input/ToDoInput'; //текст задачи
import Footer from '../components/footer/Footer';
import ToDoList from '../components/todo-list/ToDoList';//список задач

import {addTask, deleteTask, completeTask} from "../actions/actionCreator";
import './Todo.css';


class ToDo extends Component {

	state = {
		activeFilter: 'all',
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

	render() {
		const { activeFilter, taskText } = this.state;
		const { tasks, deleteTask, completeTask } = this.props;
		const isTasksExist = tasks && tasks.length > 0;

		return (
			<div className="todo-wrapper">
				<ToDoInput onKeyPress={this.addTask} onChange={this.handleInputChange} value={taskText} />
				{isTasksExist && <ToDoList completeTask={completeTask} tasksList={tasks} deleteTask={deleteTask} />}
				{isTasksExist && <Footer amount={tasks.length} activeFilter={activeFilter} />}
			</div>
		);
	}
}

export default connect(state => ({
	tasks: state.tasks,
}), { addTask, deleteTask, completeTask})(ToDo);
