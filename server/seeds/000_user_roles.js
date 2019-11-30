exports.seed = async knex => {
    await knex('user_roles').del();
    return await knex('user_roles').insert([
        { name: 'user' },
        { name: 'admin' },
        { name: 'superadmin' }
    ]);
};
