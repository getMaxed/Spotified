exports.up = knex => {
    return knex.schema
        .createTable('feedbacks', table => {
            table.increments('id').primary();
            table.string('user_id');
            table.string('genres');
            table.string('artists');
            table.string('czlp_cookie');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('users', table => {
            table.uuid('id').primary();
            table.integer('role_id');
            table.string('email');
            table.string('username');
            table.string('password');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('genres', table => {
            table.increments('id').primary();
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('artists', table => {
            table.uuid('id').primary();
            table.integer('genre_id');
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('user_roles', table => {
            table.increments('id').primary();
            table.string('name');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};

exports.down = knex => {
    return knex.schema
        .dropTableIfExists('feedbacks')
        .dropTableIfExists('users')
        .dropTableIfExists('genres')
        .dropTableIfExists('artists')
        .dropTableIfExists('user_roles');
};
