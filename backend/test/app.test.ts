import request from "supertest";
import app from "../src/app";
import { expect } from "chai";

describe("Unit test", () => {
  it("Get / should return Hello workd", async () => {
    try {
      const response = await request(app).get("/");
      expect(response.statusCode).to.eq(200);
      expect(response.text).to.eq("Hello world!");
    } catch(err) {
      console.log(err)
    };
  });

  describe("Sum endpoint test", () => {
    it("5 + 3 = 8", async () => {
      try {
        const response = await request(app).post('/math/sum').send({'number1': 5, 'number2': 3});
        expect(response.statusCode).to.eq(200);
        expect(response.body.result).to.eq(8);
      } catch (err) {
        console.log(err);
      }
    })

    it("Invalid param", async () => {
      try {
        const response = await request(app).post('/math/sum').send({'number1': 'a', 'number2': 3});
        expect(response.statusCode).to.eq(400);
        const {errors} = response.body;
        expect(errors.length).to.eq(1);
        expect(errors[0]?.value).to.eq('a');
        expect(errors[0]?.param).to.eq('number1');
        expect(errors[0]?.location).to.eq('body');
        expect(errors[0].msg).to.eq('Input number is invalid');
      } catch (err) {
        console.log(err);
      }
    })
  })
});
Error: can't find module @cypress/react/plugins/react-scripts'