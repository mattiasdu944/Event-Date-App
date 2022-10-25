const { createPool } = require("mysql2/promise");

// const db = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: 3306,
//     database: 'event_date'
// })

const db = createPool({
    host: 'aws-sa-east-1.connect.psdb.cloud',
    user: '8anncwb6vwi9cw0jgcb9',   
    password: 'pscale_pw_scuIxLVf9t0nYTpTYzhUX2qcc4mOiV6KNsS3UoLYIw4',
    port: 3306,
    database: 'event_date',
    ssl:{
        rejectUnauthorized: false
    }
})


export { db }