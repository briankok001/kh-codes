
const reg_chinese = /^[\u4e00-\u9fa5]*$/;
const reg_num = /^\d*$/;
const reg_chinese_english = /^[\u4e00-\u9fa5_A-Za-z]*$/;

console.log(reg_chinese.test('aaa'));
console.log(reg_chinese.test('我在在在'));
console.log(reg_chinese.test('s我要1'));

console.log('-----------------------')

console.log(reg_num.test('aaa'));
console.log(reg_num.test('aaa23423asf'));
console.log(reg_num.test('123'));
console.log(reg_num.test('123ab'));

console.log('-----------------------')

console.log(reg_chinese_english.test('aaa我在abb'));
console.log(reg_chinese_english.test('我在在在'));
console.log(reg_chinese_english.test('s我要1'));