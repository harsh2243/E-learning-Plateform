
const crypto = require('crypto');


const key1= crypto.randomBytes(32).toString('hex');
const key2= crypto.randomBytes(32).toString('hex');

console.table({key1,key2});

// module.exports = (req, res, next) => {
//   const { email, password } = req.body;

//   const hash = crypto.createHash('sha256');
//     hash.update
//     (
//         email +
//       password
//     );

//     req.body.password = hash.digest('hex');

//     next();

// };