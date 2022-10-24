const { createPool } = require("mysql2/promise");

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'event_date'
})

export { db }