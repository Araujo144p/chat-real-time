import fastify from 'fastify'

const app = fastify()


app.get('/', (request, reply) => {
    return 'chat real time'
})

app.listen({ port: 3030 }).then(() => {
    console.log('server is running...')
})