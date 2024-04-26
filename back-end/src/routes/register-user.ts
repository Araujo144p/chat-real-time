import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function registerUser(app: FastifyInstance){
     app
     .withTypeProvider<ZodTypeProvider>()
     .post('/user', {
        schema: {
            body: z.object({
                socialName: z.string(),
                username: z.string(),
                email: z.string().email(),
                password: z.string()
            })
        }
     } , async (request, reply) => {
        const { socialName, username, email, password } = request.body

        const user = await prisma.user.create({
            data: {
                nomeSocial: socialName,
                username,
                email,
                password,
            }
        })

        reply.status(201).send({ userId: user.id })
     })
}