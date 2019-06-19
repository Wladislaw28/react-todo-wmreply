import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ToDoItem from "./ToDoItem";
import Button_Date from './timer-components/Button_Date';
import TimerDisplay from './timer-components/TimerDisplay';

import './ToDoItemDate.css';

class ToDoItemDate extends ToDoItem{

	constructor(props) {
		super(props);
		this.startTimer = this.startTimer.bind(this);
		this.state = {
			timeLeft: null,
			timer: null
		};
	}

	startTimer(timeLeft) {
		clearInterval(this.state.timer);
		let timer = setInterval(() => {
			let timeLeft = this.state.timeLeft - 1;
			if (timeLeft === 0) {
				clearInterval(timer);
			}
			this.setState({
				timeLeft: timeLeft
			});
		}, 1000);
		return this.setState({timeLeft: timeLeft, timer: timer});
	}


	render(){
		const {completeTask, isCompleted, deleteTask, id, text, data} = this.props;
		let data_sec = Date.parse(data) / 100000;
		return(
			<div className="todo-item-div">
				<li  className='todo-item-date'>
					<i onClick={ () => completeTask(id) }
					   className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
					<span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
					<Button_Date time={data_sec} startTimer={this.startTimer} />
					<TimerDisplay timeLeft = {this.state.timeLeft}/>
					<i onClick={ () => deleteTask(id) } className="fas fa-plus" />
					<i onClick={ () => deleteTask(id) } className="fas fa-times" />
				</li>
			</div>
		)
	}
}

ToDoItemDate.propTypes = {
	text: PropTypes.string,
	data: PropTypes.string,
	isCompleted: PropTypes.bool,
	deleteTask: PropTypes.func,
	completeTask: PropTypes.func,
	id: PropTypes.number
};

ToDoItemDate.defaultProps = {
	text: '',
	data: '1999-08-30',
	isCompleted: false,
	deleteTask: () => {},
	completeTask: () => {},
	id: 0
};

export default ToDoItemDate;
