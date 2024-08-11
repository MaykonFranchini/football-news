import { NewsCard } from '@/app/components/newsCard'
import prisma from '@/infra/database'
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
  const res = await fetch(`${process.env.BASE_URL}/api/v1/clubnews?id=${club.id}`, { next: { revalidate: 3600 } })
  const resBody = await res.json()
  const {newsList} = resBody
  
  return (
    <div className='mx-auto mb-4 bg-slate-100 py-4 flex-wrap w-full justify-center px-10 flex gap-4'>
      {newsList.map((news: News) => {
        return <NewsCard {...news} key={news.title}/>
      })}
    </div>
  )

}