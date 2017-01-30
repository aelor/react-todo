import React from 'react';
import TodosListHeader from './todos-list-header';
import TodoListItem from './todo-list-item'
import CreateTodoItem from './create-todo-item';
import _ from 'lodash';

export default class TodosList extends React.Component{
	renderItems() {
		return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo}/>)
	}

	render(){
		return(
			<table>
				<TodosListHeader/>
				<tr>
					{this.renderItems()}
				</tr>
			</table>
		)
	}
}