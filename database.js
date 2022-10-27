const Pool = require("pg").Pool;

const pool = new Pool({
	connectionString:
		process.env.DATABASE_URL ||
		"postgres://zdxefmcy:1BSFKhPW2TLnLqo6xLo6II3xaU2MmXaV@heffalump.db.elephantsql.com/zdxefmcy",
});
module.exports = pool;
