const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http')
const rewire = require('rewire');
let app = rewire('../server.js');
// let client = rewire('../client/client.js')
// let server = rewire('../server.js')
chai.use(chaiHttp);
chai.should();
let browser;
let page;
describe('Routes', () => {
  describe('GET /', () => {
    it("should get home route", (done) => {
      chai.request('http://localhost:3000')
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          // expect(res.text).to.eql('Hello world!');
          done();
        });
    });
    it("should return all blogs", (done) => {
      chai.request('http://localhost:3000')
        .get('/blogs')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    it("should create new blog", (done) => {
      chai.request('http://localhost:3000')
        .post('/blog/comments')
        .send({"blogs":[0]})
        // .expect(200)
        .end((err, res) => {
          // res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  describe('POST /blog/comments', () => {
      // in progress
      it("should create new comment", (done) => {
        chai.request('http://localhost:3000')
        .post('/blogs/comments')
        .end((err, req) => {
          req.body.should.be.a('object');
          // req.should.have.status(200);
          done();
        });
      });
  //
      // in progress
      // it("should create new blog", (done) => {
      //   chai.request(app)
      //   .post('/blogs/new')
      //   // .send({"blogs":{"title":"hello"}})
      //   // .expect(200)
      //   .end((err, res) => {
      //     // res.should.have.status(200);
      //     res.body.should.be.a('object');
      //     done();
      //   });
      // });
  });
})})
