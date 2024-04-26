import fastify from 'fastify'
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from 'fastify-type-provider-zod'
import { registerUser } from './routes/register-user'

const app = fastify()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(registerUser)

app.get('/', (request, reply) => {
    return 'chat real time'
})

app.listen({ port: 3030 }).then(() => {
    console.log('server is running...')
})