import http from "http";
const { connect } = require("./db/Config");
import { routes } from "./router";

const port = process.env.PORT || "8000";

export function createServer() {
  const app = http.createServer(async (req: any, res: any) => {
    await routes(req, res);
  });

  const server = app.listen(port, async () => {
    await connect();
    console.log(`Server is listening on port ${port}`);
  });
  return { app, server };
}
