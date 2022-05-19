const request = require("supertest");
const app = require("../index.js");

describe("Server is running ", () => {
    test("It should respond with a 200 status", async () => {
    const response = await request(app).get("/")
    expect(response.statusCode).toBe(200);
    });
    });


    const mongoose = require("mongoose");
    const databaseName = "test";
    
    beforeAll(async () => {
        const url = `mongodb://127.0.0.1/${databaseName}`;
        await mongoose.connect(url, { useNewUrlParser: true });
    });