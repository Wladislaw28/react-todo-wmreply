import React from 'react';
import PropTypes from 'prop-types';
import {USERS} from '../../../constants';

import './ToDoSelect.css';

const ToDoSelect = ({value, onChange}) => (
	<div className="todo-select-wrapper">
		<select className="todo-select" onChange={onChange} value={value}>
			{USERS.map(({id, value, title}) => (
				<option key={`${id} - ${value}`} value={value}>{title}</option>
				))}
		</select>
	</div>
);

ToDoSelect.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};

ToDoSelect.defaultProps ={
	value: '',
	onChange: () => {}
};

export default ToDoSelect;
