
exports.seed = knex => {
  return knex('strains')
    .insert([
      { strain: 'Ak-47' },
      { strain: 'Afghani' },
      { strain: 'Alohaberry' },
      { strain: 'Bakerstreet' },
      { strain: 'Birthday Cake Kush' },
      { strain: 'Blueberry Dream' },
      { strain: 'Bubbleberry' },
      { strain: 'Cackleberry' },
      { strain: 'Candy Cane' },
      { strain: 'Doctor Funk' },
      { strain: 'Durban Poison' },
      { strain: 'Ebola 007' },
      { strain: 'Electric Kool-Aid' },
      { strain: 'Golden Nugget' },
      { strain: 'Head Cheese' },
      { strain: 'Lotion Potion ' },
      { strain: 'Snack Attack' },
      { strain: 'Rick Roll' }
    ])
}
