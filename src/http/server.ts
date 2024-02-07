import { fastify } from "fastify";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const app = fastify();

const prisma = new PrismaClient();

app.post("/polls", async (req, reply) => {
  const createPollBody = z.object({
    title: z.string(),
  });

  const { title } = createPollBody.parse(req.body);
  const poll = await prisma.poll.create({ data: { title } });
  return reply.code(201).send({ poll_id: poll.id });
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server started at http://localhost:3333");
});
