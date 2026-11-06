const request = require('supertest');
const app = require('./server');

describe('API Status Endpoint', () => {
  it('should return a 200 status code and healthy message', async () => {
    const res = await request(app).get('/api/v1/status');
    // We intentionally force the test framework to look for a 500 status code
    expect(res.statusCode).toEqual(200); 
    expect(res.body.status).toEqual('green');
  });
});
