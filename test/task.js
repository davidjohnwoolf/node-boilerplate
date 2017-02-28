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
});
