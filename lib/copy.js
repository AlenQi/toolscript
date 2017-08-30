'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copy the text to the pasting board.
 *
 * @param {*} The data it will be copy.
 * @returns {Boolean} Returns success or faile.
 */

var copy = function copy(text) {
  // 创建元素用于复制
  var aux = document.createElement('input');
  // 获取复制内容
  var content = text;
  // 设置元素内容
  aux.setAttribute('value', content);
  // 将元素插入页面进行调用
  document.body.appendChild(aux);
  // 复制内容
  aux.select();
  // 将内容复制到剪贴板
  document.execCommand('copy');
  // 删除创建元素
  document.body.removeChild(aux);

  return true;
};

exports.default = copy;