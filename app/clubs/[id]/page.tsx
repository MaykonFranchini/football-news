import { NewsCard } from '@/app/components/newsCard'
import prisma from '@/infra/database'
import { latestsNews } from '@/utils/getNews'
import { News } from '@/app/page'

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
    <div className='mx-auto mb-4 bg-slate-100 py-4 flex-wrap w-full justify-center px-10 flex gap-4'>
      {newsList.map((news: News) => {
        return <NewsCard {...news} key={news.title}/>
      })}
    </div>
  )

}