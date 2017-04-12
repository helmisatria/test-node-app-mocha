const request = require('supertest');
const expect = require('expect')

var app = require('./app').app;

describe('Servers', () => {
    describe('#get /', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
        });
    })
    describe('#get /users', () => {
        it('should return user object', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res) => {
                expect(res.body).toInclude({
                    name: 'Helmi',
                    age: 20
                });
            })
            .end(done)
        })
    })
})
