const bcrypt = require('bcrypt');
const myPassword = 'Gluhhov_Georgi';

console.time('Time to generate salt');
const salt = bcrypt.genSaltSync(10);
console.log('This is your salt:' + salt);
console.timeEnd('Time to generate salt');

console.time('Time to generate hash');
const hashedPassword = bcrypt.hashSync(myPassword, salt);
console.log(myPassword + hashedPassword);
console.timeEnd('Time to generate hash')