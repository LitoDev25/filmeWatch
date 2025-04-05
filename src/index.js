import server from './app.js';
import serverless from "serverless-http";

server.run();

const api = server.app();

export const handler = serverless(api);