import React from 'react';

const InputTodo = () => {
	const [description, setDescription] = React.useState('');

	const onSubmitForm = async e => {
		e.preventDefault();
		try {
			const body = { description };
			await fetch('http://localhost:5000/todos', {
				method: 'POST',
				headers: {
					'Content-type': 'application/json',
				},
				body: JSON.stringify(body),
			});
			window.location = '/';
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<>
			<h1 className='text-center mt-5'>Input Todo</h1>
			<form className='d-flex mt-5'>
				<input
					type='text'
					className='form-control'
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
				<button className='btn btn-success' onClick={onSubmitForm}>
					Submit
				</button>
			</form>
		</>
	);
};

export default InputTodo;
