const dbConnection = require('../database/db_connect');

module.exports = () =>
    new Promise((resolve, reject) => {
        dbConnection.query(
            'INSERT INTO boards (user_id) VALUES (2) RETURNING id',
            (err, res) => {
                if (err) return reject(err);
                resolve(res.rows[0].id);
            }
        );
    });
