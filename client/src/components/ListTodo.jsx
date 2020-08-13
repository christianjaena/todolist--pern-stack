import React from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {
	const [todos, setTodos] = React.useState([]);

	const deleteTodo = async id => {
		await fetch(`http://localhost:5000/todos/${id}`, {
			method: 'DELETE',
		});
		setTodos(todos.filter(todo => todo.todo_id !== id));
	};

	const getTodos = async () => {
		const response = await fetch('http://localhost:5000/todos');
		const data = await response.json();
		setTodos(data);
	};

	React.useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<table className='table text-center mt-5'>
				<thead>
					<tr>
						<td>Description</td>
						<td>Edit</td>
						<td>Delete</td>
					</tr>
				</thead>
				<tbody>
					{todos.map(todo => (
						<tr key={todo.todo_id}>
							<td>{todo.description}</td>
							<td>
								<EditTodo todo={todo}/>
							</td>
							<td>
								<button
									className='btn btn-danger'
									onClick={() => deleteTodo(todo.todo_id)}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default ListTodo;
