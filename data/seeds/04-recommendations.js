exports.seed = knex => {
  return knex('recommendations')
    .insert([
      {
        user_id: 1,
        strain_id: 2,
      },
      {
        user_id: 2,
        strain_id: 1,
      },
    ])
}