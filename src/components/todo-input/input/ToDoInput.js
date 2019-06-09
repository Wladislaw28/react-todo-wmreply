import React from 'react';
import PropTypes from 'prop-types';

import './ToDoInput.css';

const ToDoInput = ({ value, onChange, onKeyPress, type }) => (
	<div className="todo-input-wrapper">
		<i className="fas fa-plus" />
		<input
			type={type}
			className="todo-input"
			placeholder="Click to add task"
			onChange={onChange}
			value={value}
			onKeyPress={onKeyPress}
		/>
	</div>
);

ToDoInput.propTypes = {
	onChange: PropTypes.func,
	onKeyPress: PropTypes.func,
	value: PropTypes.string,
	type: PropTypes.string
};

ToDoInput.defaultProps = {
	onChange: () => {},
	onKeyPress: () => {},
	value: '',
	type: ''
};

export default ToDoInput;

