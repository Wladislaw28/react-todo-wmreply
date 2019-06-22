import React, {Component} from 'react';
import './TimerDisplay.css';

class TimerDisplay extends React.Component {
	render() {
			return <h1 className="display">Осталось {this.props.timeLeft} <br/> секунды</h1>
	}
}

export default TimerDisplay;
