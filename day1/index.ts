import fs from 'node:fs';
import path from 'node:path';

const input = fs.readFileSync(path.join(__dirname, 'input2.txt')).toString();

const a = input.split('\r\n');
const b = a.map(data => data.split('\r\n'));
// const c = b.flatMap(data => data.map(data => data.split('')));
// const isNumber = (string: string) => !isNaN(Number(string));
// const d = c.map(row => row.filter(val => isNumber(val)));
// const e = d.map(row => row[0] + row[row.length - 1]);
// const f = e.reduce((acc, cur) => acc + Number(cur), 0);

const digits = [
  ['one', '1'],
  ['two', '2'],
  ['three', '3'],
  ['four', '4'],
  ['five', '5'],
  ['six', '6'],
  ['seven', '7'],
  ['eight', '8'],
  ['nine', '9'],
];

const c = b.map(row => row.map(data => data.split('two')));

console.log(input);
console.log(a);
console.log(b);

const inputString = 'asdflkjbaoneasdfh';
const splitArray = inputString.split('one');

console.log(splitArray);
