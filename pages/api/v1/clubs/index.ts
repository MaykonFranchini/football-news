import type { NextApiRequest, NextApiResponse } from 'next'
 
import prisma from '../../../../infra/database'


export default async function clubNews(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.method)
  if(req.method === 'POST') {
    const clubsList = req.body.clubs
    // await prisma.club.deleteMany()

  clubsList.forEach(async (club:any)=> {
    try {
      console.log(`Creating ${club.name}...`)
      await prisma.club.create({
        data: {
          name: club.name,
          source_url: club.sourceUrl,
          badge_url: club.badgeUrl,
          division: club.division,
          next_match_url: club.nextMatchUrl
        }
      })
     
    } catch (err) {
      console.log(err)

    }
  })
  
  res.status(201).json({
  })
  }
  if(req.method == "GET") {
    const clubs = await prisma.club.findMany()
    res.status(200).json({
      clubs
    })
  }
  res.status(404)
}