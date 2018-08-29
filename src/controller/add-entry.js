const addEntry = require('../queries/add-entry');

module.exports = (req, res) => {
    addEntry(req.body)
        .then(response =>
            res.redirect(`/board/${req.body.board_id}`)
        )
        .catch(err => {
            console.log(err);
        });
};