/* eslint no-unused-expressions: off */
import { expect } from 'chai';
import supertest from 'supertest';
import { describe, it } from 'mocha';
import app from '../app';

const request = supertest(app);
describe('Routes', () => {
  describe('Home Route /api/', () => {
    describe('status code', () => {
      it('should return status 200', (done) => {
        request.get('/api')
          .expect(200, done);
      });
    });

    describe('response body', () => {
      it('should contain a success property that is true', (done) => {
        request.get('/api')
          .end((err, resp) => {
            expect(resp.body).property('sucess').to.be.true;
            done();
          });
        done();
      });
      it('should contain a message property that is a string', (done) => {
        request.get('/api')
          .end((err, resp) => {
            expect(resp.body).property('message');
            done();
          });
      });
    });
  });
});
