import supertest from "supertest"
import app from '../../../src/app';
// import { MemoryDatabase } from "../../database/memoryDb";

import { response } from "express";
import { MemoryDatabase } from "../../database/memoryDb";
import { TodoModel } from "../../../src/models/todo.model";

const db = new MemoryDatabase();


describe('Todo route', () => {

    beforeAll(async () => await db.connect());
    beforeEach(async () => await db.clear());
    afterAll(async () => await db.close());
    
    const endpoint = '/todo';
    const request = supertest(app);

    it('should give the list of todos', async () => {
        const response = await request.get(endpoint).send();
        expect(response.statusCode).toBe(200)
    });

    it('should create the todo when using the model', async () => {
        const todo : TodoModel = {
            title: "this is default title",
            content: "this is default content",
            completed: false
        };
        
        const response = await request.post(endpoint).send(todo);
        expect(response.statusCode).toBe(200);
    });

    it('should update todo when using another correct todo', async () => {
        const todo : TodoModel = {
            title: "this is default title",
            content: "this is default content",
            completed: false
        };

        const updatedTodo : TodoModel = {...todo,title:'this is an updated title'}
        const responsePost = await request.post(endpoint).send(todo)
        const responsePut = await request.put(endpoint).send(updatedTodo)
        expect(responsePut.statusCode).toBe(204);
    });

    it('should delete todo when using correct id', async () => {
        const todo : TodoModel = {
            title: "this is default title",
            content: "this is default content",
            completed: false
        };

        const responsePost = await request.post(endpoint).send(todo)
        const responseDelete = await request.delete(endpoint+"/"+responsePost.body._id).send()
        expect(responseDelete.statusCode).toBe(204);
    });

    // it('should give an error because todo is not complete', async () => {
    //     const invalidData = {
    //         // title is missing, which could trigger an error
    //         content: 'Invalid content',
    //         completed: false,
    //     };
    //     const response = await request.post(endpoint).send(invalidData);
    //     expect(response.statusCode).toBe(500);

    // })
    
})