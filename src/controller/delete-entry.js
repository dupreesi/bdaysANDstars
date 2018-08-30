const delEntry = require('../queries/delete-entry');
const getBoardId = require('../queries/get-board-id');

module.exports = (req, res) => {
    const { id } = req.params;
    let board;
    getBoardId(id)
        .then(boardId => {
            board = boardId.rows[0].board_id;
            return delEntry(id)
                .then(result =>
                    res.redirect(`/board/${board}`))
                .catch(err => next(err));
        })
        .catch(err => next(new Error("topic doesn't exist")));
};

