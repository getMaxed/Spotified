const uuid = require('uuid/v4');
const faker = require('faker');

exports.seed = async knex => {
    await knex('artists').del();
    for (let i = 0; i < 70; i++) {
        await knex('artists').insert({
            id: uuid(),
            name: faker.company.companyName(),
            genre_id: Math.floor(Math.random() * 6) + 1
        });
    }
};
