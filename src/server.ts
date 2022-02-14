import http from "http";
const throng = require("throng");

const { connect } = require("./db/Config");
import { routes } from "./router";

const port = process.env.PORT || "8000";
const WORKERS = process.env.WEB_CONCURRENCY || 1;

  // throng(
  //   {
  //     workers: WORKERS,
  //     lifetime: Infinity,
  //   },
  //   start
  // );


export function start() {
  const app = http.createServer(async (req: any, res: any) => {
    await routes(req, res);
  });

  const server = app.listen(port, async () => {
    await connect();
    console.log(`Server is listening on port ${port}`);
  });
  return { app, server };
}
