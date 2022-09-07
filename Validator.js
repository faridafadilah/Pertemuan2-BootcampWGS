const validator = require('validator');

// Validasi Email
console.log(validator.isEmail('farida@gmail.com')); //true
console.log(validator.isEmail('farida@gmail.m')); //false

// Validasi Mobile Phone
console.log(validator.isMobilePhone('08815877610', 'id-ID')); //true
console.log(validator.isMobilePhone('033215877610', 'id-ID')); //true