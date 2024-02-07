import { fastify } from "fastify";
import { z } from "zod";
import { createPoll } from "./routes/crate-poll";

const app = fastify();

app.register(createPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("Server started at http://localhost:3333");
});
