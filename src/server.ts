import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

// app.get('/hello', async () => {
//   const transaction = await knex('transactions').insert({
//     id: crypto.randomUUID(),
//     title: 'trasação de teste',
//     amount: 1000
//   })
//   .returning('*')

//   return transaction
// })

app.get('/hello', async () => {
  const transactions = await knex('transactions')
  .where('amount', 1000)
  .select('*')

  return transactions
})

app.listen({
  port: env.PORT,
}).then(() => {
  console.log('HTTP Server Running!')
}) 