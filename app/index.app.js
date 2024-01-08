// eslint-disable-next-line import/no-extraneous-dependencies
import express from "express";
import router from "./routers/index.router.js";

const app = express();

app.use(router);

export default app;
