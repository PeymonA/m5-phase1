const request = require('supertest');
const app = require('../server.js');

describe('GET /items', () => {
    it('responds with 200', async () => {
        const res = await request(app).get('/items');
        expect(res.status).toBe(200);
    });
});

describe('GET /item/<title>', () => {
    it('responds with 200', async () => {
        const postBody = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        const postRes = (await request(app).post('/item').send(postBody));
        id = postRes.body._id;
        const res = (await request(app).get(`/item/iphone`));
        expect(res.status).toBe(200);
        await request(app).delete(`/item/${id}`);
    });
});

describe('POST /item', () => {
    it('responds with 200', async () => {
        const body = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        const res = (await request(app).post('/item').send(body));
        expect(res.status).toBe(200);
        id = res.body._id;
        await request(app).delete(`/item/${id}`);
    });
});

describe('DELETE /item/<id>', () => {
    it('responds with 200', async () => {
        const body = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        const postRes = (await request(app).post('/item').send(body));
        id = postRes.body._id;
        const deleteRes = (await request(app).delete(`/item/${id}`));
        expect(deleteRes.status).toBe(200);
    });
});

describe('PATCH /item/<id>', () => {
    it('responds with 200', async () => {
        const postBody = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        const postRes = (await request(app).post('/item').send(postBody));
        id = postRes.body._id;
        const patchBody = {
            "start_price" : 1500
        };
        const patchRes = (await request(app).patch(`/item/${id}`).send(patchBody));
        expect(patchRes.status).toBe(200);
        await request(app).delete(`/item/${id}`);
    })
})