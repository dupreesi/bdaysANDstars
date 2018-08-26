const tape = require('tape');
const supertest = require('supertest');
const app = require('../src/app');

tape('tape is running', (t) => {
    t.equal(1 + 1, 2, '1 + 1 = 2');
    t.end();
});

tape('is landing page working?', (t) => {
    supertest(app)
        .get('/')
        .expect(200)
        .end((err, res) => {
            t.equal(res.status, 200, "landing returns status 200");
            t.end();
        });
});