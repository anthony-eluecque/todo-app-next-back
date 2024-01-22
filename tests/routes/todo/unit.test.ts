import supertest from "supertest"
import app from '../../../src/app';
// import { MemoryDatabase } from "../../database/memoryDb";

import { response } from "express";
import { MemoryDatabase } from "../../database/memoryDb";

const db = new MemoryDatabase();


describe('Todo route', () => {

    beforeAll(async () => await db.connect());
    beforeEach(async () => await db.clear());
    afterAll(async () => await db.close());
    
    const endpoint = '/todo'
    const request = supertest(app);

    it('It should give the list of todos', async () => {
        const response = await request.get(endpoint).send();
        expect(response.statusCode).toBe(200)
    })
})