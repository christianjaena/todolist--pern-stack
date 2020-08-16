const pool = require('../dbConnection');

const add_todo = async (req, res) => {
	try {
		const { description } = req.body;
		const newTodo = await pool.query(
			'INSERT INTO todos (description) VALUES($1) RETURNING *',
			[description]
		);
		res.json(newTodo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
};

const get_todos = async (req, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM todos');
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
};

const get_todo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query('SELECT * FROM todos WHERE todo_id = $1', [
			id,
		]);
		res.json(todo.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
};

const update_todo = async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const updateTodo = await pool.query(
			'UPDATE todos SET description = $1 WHERE todo_id = $2',
			[description, id]
		);

		res.json('Todo was updated');
	} catch (err) {
		console.error(err.message);
	}
};

const delete_todo = async (req, res) => {
	try {
		const { id } = req.params;
		const deleteTodo = await pool.query(
			'DELETE FROM todos WHERE todo_id = $1',
			[id]
		);

		res.json('Todo was deleted!');
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = {
	add_todo,
	get_todos,
	get_todo,
	update_todo,
	delete_todo,
};
