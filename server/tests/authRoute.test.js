/*  eslint no-unused-expressions: off */
import { expect } from 'chai';
import supertest from 'supertest';
import { describe, it, before } from 'mocha';
import app from '../app';
import user from '../database/models/user';

const request = supertest(app);


describe('/signup', () => {
  before((done) => {
    user.delete({ }, () => {
      done();
    });
  });
  let resBody;
  const newUser = {
    username: 'Chidiebere101',
    password: 'newvalidPassword1212',
    email: 'NoteUsed@user.com',
  };
  const SIGNUP_ROUTE = '/api/v1/auth/signup';
  before((done) => {
    request.post(SIGNUP_ROUTE)
      .send(newUser)
      .end((err, resp) => {
        resBody = resp.body;
        done();
      });
  });
  describe('status code', () => {
    request.post(SIGNUP_ROUTE)
      .send(newUser)
      .end((err, resp) => {
        resBody = resp.body;
      });
  });
  describe('request body', () => {
    it('should have a success propery that is true', (done) => {
      expect(resBody).property('success')
        .to.be.true;
      done();
    });
    it('should have a data property', (done) => {
      expect(resBody).property('data');
      done();
    });
  });
});
