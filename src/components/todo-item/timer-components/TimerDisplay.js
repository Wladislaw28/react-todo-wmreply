import React, {Component} from 'react';
import './TimerDisplay.css';

class TimerDisplay extends React.Component {
	render() {
			return <h1 className="display">Осталась {this.props.timeLeft} <br/> секунды</h1>
	}
}

export default TimerDisplay;
