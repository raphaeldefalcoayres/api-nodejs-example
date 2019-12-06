import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'User test 1',
        email: 'user1@test.com',
        password: '123123',
      });
    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'User test 1',
        email: 'user1@test.com',
        password: '123123',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'User test 1',
        email: 'user1@test.com',
        password: '123123',
      });

    expect(response.status).toBe(400);
  });
});
