let mongoose = require('mongoose');
let Task = require('../models/task');
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../app');
let should = chai.should();

chai.use(chaiHttp);

describe('tasks', () => {
    beforeEach((done) => {
        Task.remove({}, (err) => {
           done();
        });
    });

    describe('get task', () => {
        it('should get all the books', (done) => {
            chai.request(app)
                .get('/task')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done()
                });
        });
    });
});
