import { NewsCard } from '@/app/components/newsCard'
import prisma from '@/infra/database'
import { News } from '@/app/page'
import Image from "next/image"

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
    <>
      <div className={ `${club.bg_color ||'bg-red-900' } w-full h-10`}>
        <div className='flex items-center h-full justify-center align-s gap-2'>
          <Image className="max-w-full max-h-full" width={25} height={25} src={club.badge_url} alt={club.name} />
          <h1 className='text-white'>{club.name.toLocaleUpperCase()}</h1>
        </div>
      </div>
      <div className='mx-auto mb-4 bg-slate-100 py-4 flex-wrap w-full justify-center px-10 flex gap-4'>
        {newsList.map((news: News) => {
          return <NewsCard {...news} key={news.title}/>
        })}
      </div>
    </>
  )

}