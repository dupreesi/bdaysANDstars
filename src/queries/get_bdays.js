const dbConnection = require('../database/db_connect');

exports.byId = id =>
    new Promise((resolve, reject) => {
        dbConnection.query(`SELECT * FROM bdays WHERE board_id=$1`, [id], (err, res) => {
            if (err) return reject(err);
            resolve(res.rows)
        });
    });

exports.checkId = id =>
    new Promise((resolve, reject) => {
        dbConnection.query(`SELECT id FROM boards WHERE id=$1`, [id], (err, res) => {
            if (err || res.rowCount === 0) return reject(new Error('board doesnt exist'));
            resolve(res.rows);
        })
    })