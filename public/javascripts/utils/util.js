function toLine(name) {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase();
}

//批量修改对象属性名（驼峰——>下划线）
function toLineObject(obj) {
  return Object.fromEntries(
    Object.entries(obj).map((item) => {
      return [toLine(item[0]), item[1]];
    })
  );
}

module.exports = {
  toLineObject: toLineObject
};
