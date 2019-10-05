const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('GET /titles', () => {
  it('should get all titles', async () => {
    const res = await request(app)
      .get('/api/titles')
      .set('API-Key', process.env.API_KEY);
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).not.toEqual(0);
  });
  it('should get specific title if id passed', async () => {
    const title = 'Cavalcade';
    const res = await request(app)
      .get(`/api/titles/?id=${title}`)
      .set('API-Key', process.env.API_KEY);
    expect(res.statusCode).toEqual(200);
    expect(res.body[0].TitleName).toEqual(title);
  });
  it('should return 401 if no API-Key passed', async () => {
    const res = await request(app).get('/api/titles');
    expect(res.statusCode).toEqual(401);
  });
});

describe('GET /titles/details', () => {
  it('should get title details', async () => {
    const TitleId = 70523;
    const res = await request(app)
      .get(`/api/titles/details?id=${TitleId}`)
      .set('API-Key', process.env.API_KEY);
    expect(res.statusCode).toEqual(200);
    expect(res.body.TitleId).toEqual(TitleId);
  });
  it('should return 401 if no API-Key passed', async () => {
    const res = await request(app).get('/api/titles/details');
    expect(res.statusCode).toEqual(401);
  });
  it('should return 422 if no id passed', async () => {
    const res = await request(app)
      .get('/api/titles/details')
      .set('API-Key', process.env.API_KEY);
    expect(res.statusCode).toEqual(422);
  });
  it('should return 422 if random query string passed', async () => {
    const res = await request(app)
      .get('/api/titles/details?lsjldjfs=')
      .set('API-Key', process.env.API_KEY);
    expect(res.statusCode).toEqual(422);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});
