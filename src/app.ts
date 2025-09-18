import fastify from 'fastify'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions.js'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, { prefix: 'transactions' })

export { app }
