"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const Router = require("koa-router");
const logger = require("koa-logger");
const json = require("koa-json");
const serverless = require("serverless-http");
const app = new Koa();
const router = new Router();
// Hello world
router.get("/", async (ctx, next) => {
    ctx.body = { msg: "Hello world!" };
    await next();
});
// Middlewares
app.use(json());
app.use(logger());
// Routes
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log("Koa started");
});
module.exports.handler = serverless(app);
