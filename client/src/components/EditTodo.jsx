import React from 'react';

const EditTodo = ({ todo }) => {
	const [description, setDescription] = React.useState(todo.description);

	const editTodo = async e => {
		e.preventDefault();
		const body = { description };
		await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(body),
		});
		window.location = '/';
	};

	return (
		<>
			<button
				type='button'
				className='btn btn-warning'
				data-toggle='modal'
				data-target={`#id${todo.todo_id}`}
			>
				Edit
			</button>

			<div
				onClick={() => setDescription(todo.description)}
				className='modal'
				id={`id${todo.todo_id}`}
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4 className='modal-title'>Edit Todo</h4>
							<button
								onClick={() => setDescription(todo.description)}
								type='button'
								className='close'
								data-dismiss='modal'
							>
								&times;
							</button>
						</div>

						<div className='modal-body'>
							<input
								type='text'
								className='form-control'
								onChange={e => setDescription(e.target.value)}
								value={description}
							/>
						</div>

						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-warning'
								data-dismiss='modal'
								onClick={editTodo}
							>
								Edit
							</button>
							<button
								onClick={() => setDescription(todo.description)}
								type='button'
								className='btn btn-danger'
								data-dismiss='modal'
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EditTodo;
