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

    describe('get /task', () => {
        it('should get all the tasks', (done) => {
            chai.request(app)
                .get('/task')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('post /task', () => {
        it('should create a task', (done) => {
            let task = {
                title: 'Capital',
                description: 'An analysis of capitalism',
                dueDate: 'June 2018'
            }
            chai.request(app)
                .post('/task')
                .send(task)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message');
                    res.body.should.not.have.property('error');
                    done();
                });
        });
    });
});
