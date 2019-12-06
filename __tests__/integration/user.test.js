import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
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
});
