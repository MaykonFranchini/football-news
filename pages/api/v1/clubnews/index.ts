import { NextApiRequest, NextApiResponse } from "next";
import { latestsNews } from "../../../../utils/getNews";
import prisma from '../../../../infra/database'

export default async function clubNews(req: any, res: any) {
  const clubId = req.query.id

  const club = await prisma.club.findFirst({
    where: {
      id: clubId
    }
  })
  
  const newsList = await latestsNews(club!.source_url)
  res.status(200).json({
    newsList
  })
}