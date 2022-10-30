const { createPool } = require("mysql2/promise");

const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 3306,
    database: process.env.DB_NAME,
    ssl:{
        rejectUnauthorized: false
    }
})


export { db }