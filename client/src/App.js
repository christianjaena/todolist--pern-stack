import React from 'react';
import './App.css';
import InputTodo from './components/InputTodo.jsx';
import ListTodo from './components/ListTodo.jsx'
function App() {
	return (
		<>
			<div className='container'>
				<InputTodo />
				<ListTodo />
			</div>
		</>
	);
}

export default App;
