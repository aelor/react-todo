import React from 'react';
import TodosList from './components/todos-list';
import CreateTodoItem from './components/create-todo-item';

const todos = [
{
	task: 'masdsa',
	isCompleted: false
},
{
	task: 'something else',
	isCompleted: true
}
];

export default class App extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			todos
		};
	}

	render(){
		return(
			<div>
				<h1>todos</h1>
				<CreateTodoItem/>
				<TodosList todos={this.state.todos}/> 
			</div>
		)
	}
}