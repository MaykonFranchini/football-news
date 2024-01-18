import prisma from '@/infra/database'
import { latestsNews } from '@/utils/getNews'
import { News } from '@prisma/client'

export default async function Club({ params }: {params: {id: string}}) {
  const club = await prisma.club.findFirst({
    where: {
      id: params.id
    }
  })

  if(!club) {
    console.log(`not found - ${params.id}`)
    return
  }

  const newsList = await latestsNews(club.source_url)
  
  return (
    <div>
      {newsList.map((news : News) => {
        return <p key={news.title}>{news.title}</p>
      })}
    </div>
  )

}