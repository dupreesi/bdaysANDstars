const tape = require('tape');

tape('tape is running', (t) => {
    t.equal(1 + 1, 2, '1 + 1 = 2');
    t.end();
});