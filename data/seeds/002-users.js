
const bcrypt = require('bcryptjs');
exports.seed = knex => {
  return knex('users')
    .insert([
      {
        email: 'jp@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'jp',
        last_name: 'Perez'
      },
      {
        email: 'jj@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'jj',
        last_name: 'jj'
      },
      {
        email: 'aa@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'aa',
        last_name: 'aa'
      },
      {
        email: 'bb@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'bb',
        last_name: 'bb'
      }
    ])
}