
/**
 * 复制
 * @param {*} txt 
 */
export function copy(txt) {
  const input = document.createElement('input');
  input.value = txt;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}
