test('GET status of database', async ()=> {
  const res = await fetch('http://localhost:3000/api/v1/status')
  const resBody = await res.json()
  
  const actualDate = new Date(resBody.updated_at).toISOString()

  expect(res.status).toBe(200)
  expect(resBody.updated_at).toBe(actualDate)
  expect(resBody.dependencies.database.version).toBe('16.0')
  expect(resBody.dependencies.database.max_connections).toBe(100)
  expect(resBody.dependencies.database.open_connections).toBe(1)
  
})