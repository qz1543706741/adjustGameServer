const conn = require('./utils/mysql');

const sqlInfo = (sql) => {
  return new Promise((resolve, reject) => {
    //先查询userInfo是否在数据库中

    conn.query(...sql, (err, result) => {
      if (err) return reject(err.message);
      resolve(JSON.parse(JSON.stringify(result)));
    });
  });
};

module.exports = async (userInfo) => {
  //获取数据库中所有数据
  const tempsqlInfo = await sqlInfo(['select openid from user_info']);
  //检测数组中每个对象是否和用户openid都不相等，是则返回true
  const temp = Object.values(tempsqlInfo).every((item) => {
    return item.openid !== userInfo.openid;
  });
  try {
    if (temp) {
      const result = await sqlInfo(['insert user_info set ?', userInfo]);
      console.log(result);
      await sqlInfo([
        'insert user_score set ?',
        { openid: userInfo.openid, score: 100 }
      ]);
      //返回用户插入的数据
      return result;
    } else {
      const user_info = ({ data } = await sqlInfo([
        'select * from user_info where openid = ? ',
        userInfo.openid
      ]));
      const user_score = ({ data } = await sqlInfo([
        'select * from user_score where openid = ? ',
        userInfo.openid
      ]));
      return {
        user_info,
        user_score
      };
    }
  } catch (e) {
    return e;
  }
};

// const select = (selectObj) => {
//     return new Promise((resolve, reject) => {
//         //先查询userInfo是否在数据库中
//         conn.query('SELECT * FROM `user_info` ', (err, result) => {
//             if (err) return reject(err.message)
//             resolve(result)
//         })
//     });
// }
