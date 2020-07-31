import request from 'supertest';
import { app } from '../../src/app';

describe('GET /asset', () => {
    it('Should be able get the asse link', async () => {
        const response = await request(app)
            .get('/asset');

        expect(response.body).toHaveProperty('url');
        expect(response.body.url).toContain('http');
    });
})