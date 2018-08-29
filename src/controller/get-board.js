const getBdays = require('../queries/get_bdays');

exports.get = (req, res) => {
    const { board_id } = req.params;
    getBdays.checkId(board_id)
        .then(res => {
            return res[0].id;
        })
        .then(id => getBdays.byId(id)
        )
        .then(resArray => {
            const bdays = resArray;
            res.render("board", { board_id, bdays });
        })
        .catch(err => res.status(500).send(`<h1>Server error: ${err.message}</h1>`)
        );
}