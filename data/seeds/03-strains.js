exports.seed = knex => {
  return knex('strains')
    .insert([
      { strain: 'Ak-47' },
      { strain: 'Afghani' },
      { strain: 'Birthday Cake Kush' },
      { strain: 'Blueberry Dream' },
      { strain: 'Brain Berry Cough' },
      { strain: 'Bubbleberry' },
    ])
}