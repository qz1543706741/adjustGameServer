const conn = require('./utils/mysql')
module.exports = (sql) => {
    return new Promise((resolve, reject) => {
        conn.query(sql, (err, result) => {
            if (err) return reject(err.message)
            resolve(result)
        })
    })
}