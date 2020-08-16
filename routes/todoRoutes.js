const express = require('express');
const route = express.Router();
const {
	add_todo,
	get_todos,
	get_todo,
	update_todo,
	delete_todo,
} = require('../controllers/todoControllers');

route.post('/', add_todo);
route.get('/', get_todos);
route.get('/:id', get_todo);
route.put('/:id', update_todo);
route.delete('/:id', delete_todo);

module.exports = route;
