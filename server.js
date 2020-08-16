const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

// * MIDDLEWARES //

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// * ROUTES //

app.use('/todos', todoRoutes);

app.listen(5000, () => {
	console.log('Server running at port 5000');
});
