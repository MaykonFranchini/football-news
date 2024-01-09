import { Client } from 'pg'

type QueryObject = {
  text: string,
  values: (string| undefined)[],
}

export default async function query(queryObject: QueryObject | string) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
  })

  await client.connect()

  try {
    const response = await client.query(queryObject)
    return response
  } catch (err) {
    console.log(err)
  } finally {
    await client.end()
  }
}
