const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const path = require('path');
const todoRoutes = require('./routes/todoRoutes');
const PORT = process.env.PORT || 5000;

// * MIDDLEWARES //

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}
// * ROUTES //

app.use('/todos', todoRoutes);

// ? CATCH-ALL ROUTE
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(PORT, () => {
	console.log(`Server running at port ${PORT}`);
});
