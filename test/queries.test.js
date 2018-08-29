const tape = require('tape');
const runDbTestBuild = require('../src/database/test_build');
const getBdays = require('../src/queries/get_bdays');
const createBoard = require('../src/queries/create_board');
const addEntry = require('../src/queries/add-entry');

tape('tape is running (test.queries)', (t) => {
    t.equal(2 / 2, 1, '2 by 2 div = 1');
    t.end();
});

tape('db_test_build is working', (t) => {
    runDbTestBuild()
        .then(res => {
            t.ok(res, 'res is not null')
            t.end()
        })
        .catch(error => {
            t.error(error, 'error occuring in db_test_build')
            t.end();
        });
});

tape('Can get bday table related to a board by board_id', (t) => {
    runDbTestBuild()
        .then(getBdays
            .byId(1)
            .then(res => {
                t.ok(res, 'should get a result');
                t.equal(res.length, 2, 'should have 2 entries')
                t.end();
            })
            .catch(error => {
                t.error(error, 'error related to getBdays');
                t.end();
            })
        );
});

tape('non-existing board_id throws an error', (t) => {
    runDbTestBuild()
        .then(getBdays
            .checkId('5')
            .catch(error => {
                t.ok(error, 'board does not exist');
                t.end();
            })
        );
});

tape("Create a board", t => {
    runDbTestBuild().then(
        createBoard().then(id => {
            t.equal(id, 5, "New board has the ID of 5 ");
            t.end();
        })
    );
});

tape("add a new entry", t => {
    const fakeEntry = {
        board_id: 1,
        name: 'Wulfi',
        dob: '1987-04-14'
    };
    runDbTestBuild().then(
        addEntry(fakeEntry)
            .then(res => {
                t.ok(res, 'getting a res');
                t.equal(res.rowCount, 1, 'adding 1 row');
                t.end();
            })
            .catch(error => {
                t.error(error, 'error related to addEntry');
                t.end();
            })
    );
});