import { NextApiRequest, NextApiResponse } from "next";
import  prisma  from '@/infra/database'

export type StatusResponse = {
  updated_at: string,
  dependencies: {
    database: {
      version: string,
      max_connections: number,
      open_connections: number,
    }
  }

}

type databaseVersion = {
  server_version: string
}

type maxConnections = {
  max_connections: string
}
type openConnections = {
  count: number
}

export default async function status(req: NextApiRequest, res: NextApiResponse<StatusResponse>) {

  const databaseName = process.env.POSTGRES_DB

  const dbVersion = await prisma.$queryRaw<databaseVersion[]>`SHOW server_version;`
  const maxConnections = await prisma.$queryRaw<maxConnections[]>`SHOW max_connections;`
  const openedConnections = await prisma.$queryRaw<openConnections[]>`SELECT count(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};`

  const dbVersionFormatted = dbVersion[0].server_version
  const dbMaxConnectionsFormatted = Number(maxConnections[0].max_connections)
  const dbOpenedConnectionsFormatted = openedConnections[0].count
  
  res.status(200).json({ 
    updated_at: new Date().toISOString(),
    dependencies: {
      database: {
        version: dbVersionFormatted,
        max_connections: dbMaxConnectionsFormatted,
        open_connections: dbOpenedConnectionsFormatted,
      }
    }
   })
}