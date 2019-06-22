import React, {Component} from 'react';
import './Button_Date.css'

class Button_Date extends React.Component{

	handleButtonDate(){
		return this.props.startTimer(this.props.time)
	}

	render(){
		return <button className="button-date" onClick={this.handleButtonDate.bind(this)}>{this.props.time}</button>
	}
}

export default Button_Date;
