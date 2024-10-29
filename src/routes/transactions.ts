import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'


export async function transactionsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    // cria schema de validação dos dados 
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    // valida os dados vindos na request
    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    // insere os dados no banco
    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    // retorna um status de sucesso para o usuário
    return reply.status(201).send()
  })
}