import moongose from 'mongoose'

import  supertest from"supertest";
import { createServer } from '../src/server';
const { app, server } = createServer();
const api = supertest(app);



describe("test endpoint shoppingcart method GET", () => {
  it("get all cart", async () => {
    await api
      .get("/shoppingcart")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
  it("get cart by bad id", async () => {
    await api
      .get("/shoppingcart/1234")
      .expect(500)
      .expect("Content-Type", /application\/json/);
  });
  it("get cart id", async () => {
    await api
      .get("/shoppingcart/620301cd5105ea1e41f0257f")
      .expect(404)
      .expect("Content-Type", /application\/json/);
  });
  it("get cart id", async () => {
    await api
      .get("/shoppingcart/6203032411bfe5a7e9e86e2f")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

describe("test endpoint products method GET", () => {

    it('get all products', async ()=>{
        await api
      .get("/products")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    } )
});

afterAll(  () => {
   server.close();
   moongose.connection.close();
});
