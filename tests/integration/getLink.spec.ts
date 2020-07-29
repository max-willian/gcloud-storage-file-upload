import request from 'supertest';
import app from '../../src/app';

describe('GET /asset', () => {
    it('Should be able to create a new ONG', async () => {
        const response = await request(app)
            .get('/asset');

        expect(response.body).toHaveProperty('url');
        expect(response.body.url).toContain('http');
    });
})