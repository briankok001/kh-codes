
/**
 * 列表生成树形结构
 * @param {*} list 列表
 * @param {*} root 根id值，默认：0
 * @param {*} idProp id属性，默认为：id
 * @param {*} pidProp 父级id属性, 默认为:pid
 * @returns 树形结构
 */
export default function listToTree(list, root = 0, idProp = 'id', pidProp = 'pid') {
  const map = {};

  list.forEach((item) => {
    if (!map[item[idProp]]) {
      map[item[idProp]] = item;
    }
  });

  list.forEach((item) => {
    if (map[item[pidProp]]) {
      map[item[pidProp]].children
        ? map[item[pidProp]].children.push(item)
        : (map[item[pidProp]].children = [item]);
    }
  });

  return list.filter(item => {
    if (item[pidProp] === root) {
      return item;
    }
  });
}
