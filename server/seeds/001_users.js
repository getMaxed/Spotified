const uuid = require('uuid/v4');

exports.seed = async knex => {
    await knex('users').del();
    return await knex('users').insert([
        {
            id: uuid(),
            email: 'asdf@asdf.asdf',
            username: 'asdf',
            password: 'asdfasdf',
            role_id: 1
        },
        {
            id: uuid(),
            email: 'zxcv@zxcv.zxcv',
            username: 'zxcv',
            password: 'zxcvzxcv',
            role_id: 1
        },
        {
            id: uuid(),
            email: 'qwer@qwer.qwer',
            username: 'qwer',
            password: 'qwerqwer',
            role_id: 2
        },
        {
            id: uuid(),
            email: 'test@test.test',
            username: 'test',
            password: 'testtest',
            role_id: 2
        },
        {
            id: uuid(),
            email: 'fdsa@fdsa.fdsa',
            username: 'fdsa',
            password: 'fdsafdsa',
            role_id: 3
        },
        {
            id: uuid(),
            email: 'rewq@rewq.rewq',
            username: 'rewq',
            password: 'rewqrewq',
            role_id: 3
        },
        {
            id: uuid(),
            email: 'vcxz@vcxz.vcxz',
            username: 'vcxz',
            password: 'vcxzvcxz',
            role_id: 2
        }
    ]);
};
