import 'dotenv/config'
import setupknex from 'knex'
import { env } from './env/index.js'

export const config: setupknex.Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}
export const knex = setupknex(config)
