const bcrypt = require('bcryptjs');
exports.seed = knex => {
  return knex('users')
    .insert([
      {
        email: 'jp@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'Jose',
        last_name: 'Perez'
      },
      {
        email: 'jose@medcabinet.com',
        password: bcrypt.hashSync('abc123!', 12),
        first_name: 'jp',
        last_name: 'fake'
      },
    ])
}
