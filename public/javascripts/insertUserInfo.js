const conn = require('./utils/mysql')

const sqlInfo = (sql)=>{
    return new Promise((resolve, reject) => {
        //先查询userInfo是否在数据库中
        conn.query(...sql, (err, result) => {
            if (err) return reject(err.message)
            resolve(JSON.parse(JSON.stringify(result)))
        })
    });
} 
module.exports = async (userInfo) => {
    
    //获取数据库中所有数据
    const sqlInfo1 = await sqlInfo(['SELECT `openid` FROM `user_info` '])
    
    if(!Object.values(sqlInfo1).includes(userInfo.openid)){
        await sqlInfo(['INSERT user_info set ?',userInfo])
    }

}

// const select = (selectObj) => {
//     return new Promise((resolve, reject) => {
//         //先查询userInfo是否在数据库中
//         conn.query('SELECT * FROM `user_info` ', (err, result) => {
//             if (err) return reject(err.message)
//             resolve(result)
//         })
//     });
// }