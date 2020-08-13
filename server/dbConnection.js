const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: '031899',
	host: 'localhost',
	port: 5432, // ? DEFAULT PORT
	database: 'perntodo',
});

module.exports = pool;
