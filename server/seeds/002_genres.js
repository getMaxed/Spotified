exports.seed = async knex => {
    await knex('genres').del();
    return await knex('genres').insert([
        { name: 'mdm' },
        { name: 'metalcore' },
        { name: 'death_metal' },
        { name: 'electronic' },
        { name: 'noise_rock' },
        { name: 'blues' }
    ]);
};
