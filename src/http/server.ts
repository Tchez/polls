import { fastify } from "fastify";
import { z } from "zod";
import { createPoll } from "./routes/crate-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import cookie from "@fastify/cookie";

const app = fastify();

app.register(cookie, {
  secret: "polls-app-secret",
  hook: "onRequest",
});
app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({ port: 3333 }).then(() => {
  console.log("Server started at http://localhost:3333");
});
