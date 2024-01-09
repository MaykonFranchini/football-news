import { NextApiRequest, NextApiResponse } from "next";
import  query  from '@/infra/database'

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

export default async function status(req: NextApiRequest, res: NextApiResponse<StatusResponse>) {

  const databaseName = process.env.POSTGRES_DB

  const dbVersion = await query('SHOW server_version;')
  const maxConnections = await query('SHOW max_connections;')
  const openedConnections = await query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;", 
    values: [databaseName]
  })

  const dbVersionFormatted = dbVersion?.rows[0].server_version
  const dbMaxConnectionsFormatted = Number(maxConnections?.rows[0].max_connections)
  const dbOpenedConnectionsFormatted = openedConnections?.rows[0].count
  
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