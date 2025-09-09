const request = require('supertest');
const app = require('../server.js');

describe('GET /items/<keyword>', () => {
    it('responds with 200', async () => {
        const postBody = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        const postRes = (await request(app).post('/item').send(postBody));
        id = postRes.body._id;
        const res = (await request(app).get(`/items/iphone`));
        expect(res.status).toBe(200);
        await request(app).delete(`/item/${id}`);
    });

    it('Sunny Day Scenario', async () => {
        // declaring a const halts execution for some reason
        const waiting = await request(app).delete("/items");

        const postBody1 = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        await request(app).post('/item').send(postBody1);

        const postBody2 = {
                "title" : "iPhone 16 Pro Max",
                "description" : "",
                "start_price" : 1500,
                "reserve_price" : 2500
        };
        await request(app).post('/item').send(postBody2);

        const postBody3 = {
                "title" : "Samsung",
                "description" : "Not an iPhone",
                "start_price" : 1500,
                "reserve_price" : 2500
        };
        await request(app).post('/item').send(postBody3);

        const getRes = (await request(app).get(`/items/iphone`));
        expect(getRes.body.length).toBe(3);

        await request(app).delete(`/items/iphone`);
    });

    it('Does not get wrong item', async () => {
        const waiting = await request(app).delete("/items");

        const postBody1 = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        await request(app).post('/item').send(postBody1);

        const getRes = (await request(app).get(`/items/Samsung`));
        expect(getRes.body.length).toBe(0);

        await request(app).delete(`/items/iphone`);
    });
    it('Case insensitive', async () => {
        const waiting = await request(app).delete("/items");

        const postBody1 = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        await request(app).post('/item').send(postBody1);

        const getRes = (await request(app).get(`/items/IPHONE`));
        expect(getRes.body.length).toBe(1);

        await request(app).delete(`/items/iphone`);
    });

    it('Empty string', async () => {
        const waiting = await request(app).delete("/items");

        const postBody1 = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        await request(app).post('/item').send(postBody1);

        const getRes = (await request(app).get(`/items/""`));
        expect(getRes.body.length).toBe(0);

        await request(app).delete(`/items/iphone`);
    });

    it('Special characters', async () => {
        const waiting = await request(app).delete("/items");

        const postBody1 = {
                "title" : "iPhone",
                "description" : "",
                "start_price" : 1000,
                "reserve_price" : 2000
        };
        await request(app).post('/item').send(postBody1);

        const getRes = (await request(app).get(`/items/!!!`));
        expect(getRes.body.length).toBe(0);

        await request(app).delete(`/items/iphone`);
    });
});