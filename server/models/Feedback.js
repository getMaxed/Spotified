const { Model } = require('objection');

class Feedback extends Model {
    static get tableName() {
        return 'feedbacks';
    }
}

module.exports = Feedback;
