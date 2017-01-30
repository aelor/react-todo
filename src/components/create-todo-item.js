import React from 'react';

export default class CreateTodoItem extends React.Component{
	render(){
		return(
			<form>
				<input placeholder='what do I have to do?'/>
				<button>Create</button>
			</form>
		)
	}
}