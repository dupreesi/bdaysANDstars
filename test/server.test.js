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

tape('is board route working?', (t) => {
    supertest(app)
        .get('/board/1')
        .expect(200)
        .end((err, res) => {
            t.error(err, 'board/1 should return 200 status');
            t.end();
        });
});

tape('check that nonexistent route gets 404', (t) => {
    supertest(app)
        .get('/gagasgasga/')
        .expect(404)
        .end((err, res) => {
            t.error(err, '404 status returned');
            t.end();
        });
});