import React from 'react';
import PropTypes from 'prop-types';

import './ToDoTextArea.css';

const ToDoTextArea = ({value, onChange}) => (
	<div className="todo-textarea-wrapper">
		<textarea className="todo-textarea" onChange={onChange} value={value} cols="70" rows="6"
				  placeholder="Write a detailed description of the task"></textarea>
	</div>
);

ToDoTextArea.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};

ToDoTextArea.defaultProps = {
	value: '',
	onChange: () => {}
};

export default ToDoTextArea;
