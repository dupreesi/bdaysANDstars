const dbConnection = require('../database/db_connect');

module.exports = entry =>
    new Promise((resolve, reject) => {
        dbConnection.query(
            `INSERT INTO bdays (board_id, name, dob, starsign, horoscope) VALUES ($1, $2, $3, $4, $5)`,
            [entry.board_id, entry.name, entry.dob, entry.dob, entry.dob],
            (err, res) => {
                if (err) return reject(err);
                resolve(res);
            }
        );
    });