const supertest = require("supertest");

const server = require("./server.js");
const db = require("../data/dbConfig.js");

beforeEach(() => {
  return db.migrate.rollback().then(()=>db.migrate.latest()).then(()=>db.seed.run());
});

afterEach(async () => {
  await db("projects").truncate();
});

describe("server", () => {
  it("can run the test", () => {
    expect(true).toBeTruthy();
  })

  describe("GET /", () =>{
    it("should return http status code 200 OK", () =>{
      return(
        supertest(server)
        .get("/")
        .then(response =>{
          expect(response.status).toBe(200);
        })
      )
    })

    it("should return { api: 'up'} ", () =>{
      return supertest(server)
      .get("/")
      .then(response => {
        expect(response.body).toEqual({ api: "IS UP" });
        expect(response.body.api).toBeDefined();
        expect(response.body.api).toBe("IS UP")
      })
    })
  })

  describe("GET /projects", () => {
    it("should return an array",() =>{
      return supertest(server)
      .get("/projects")
      .then(response =>{ 
        expect(Array.isArray(response.body.data)).toBe(true);
      })
    })
  })
})