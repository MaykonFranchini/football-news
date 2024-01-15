import { NextApiRequest, NextApiResponse } from "next";
import prisma from '@/infra/database'
import { latestsNews } from "@/utils/getNews";

export default async function updateNews(req: NextApiRequest, res: NextApiResponse) {
  const clubs = await prisma.club.findMany()

  for (const club of clubs) {
    const latestsNewsList = await latestsNews(club.source_url)
    if(latestsNewsList.length > 0) {
      for (const news of latestsNewsList) {
        await prisma.news.create({
          data: {
            title: news.title,    
            link: news.link,     
            image_url: news.img_url,   
            source_name:'globoesporte',
            source_img:'https://s2.glbimg.com/qAiq9Ny0KA4EmGK-aiRLQ8-y3-s=/0x0:2048x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/f/1/ctmjQ9SOypbLkmmJyMuw/ge.png',
            club_id:club.id,
          }
        })
      }
    }
  }

  res.status(201)

}