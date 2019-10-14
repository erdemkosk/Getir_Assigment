const app = require('../app');
const supertest = require('supertest')



describe('Random Url Test', () => {
    it('Random url check', async () => {
        const response =  await supertest(app).get(`/test`)
        expect(response.status).toBe(404);
     });
});


describe('Post Url Check', () => {
  
    it('Post Valid check', async () => {
        const response =  await supertest(app).post(`/api/record/records`)
        .send({startDate: '2018-2-2',endDate: '2018-3-2',minCount: '1000',maxCount: '4000'})
        .set('Accept', 'application/json')
        expect(response.status).toBe(200);
     });
});