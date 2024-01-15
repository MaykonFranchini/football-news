test('Top news endpoint', async () => {
  const res = await fetch('http://localhost:3000/api/v1/topnews')
  const resBody = await res.json()

  expect(res.status).toBe(200)
  expect(resBody.newsList.length).toBe(5)
})