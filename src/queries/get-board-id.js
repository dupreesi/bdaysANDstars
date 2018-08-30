const dbConnection = require("../database/db_connect");

module.exports = entryId =>
    new Promise((resolve, reject) => {
        dbConnection.query(
            `SELECT board_id FROM bdays WHERE id=$1`,
            [entryId],
            (err, res) => {
                if (err || res.rowCount === 0) reject(err);
                return resolve(res);
            }
        );
    });