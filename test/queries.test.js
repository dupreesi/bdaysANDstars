const tape = require('tape');
const runDbTestBuild = require('../src/database/test_build');

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