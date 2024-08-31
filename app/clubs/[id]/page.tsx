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
  const resNews = await fetch(`${process.env.BASE_URL}/api/v1/clubnews?id=${club.id}`, { next: { revalidate: 3600 } })
  const resNewsBody = await resNews.json()
  const {newsList, fixturesList} = resNewsBody
  const fixtures = fixturesList.splice(0,4)
  
  return (
    <>
      <div className= 'bg-red-900 w-full h-10'>
        <div className='flex items-center h-full justify-center align-s gap-2'>
          <Image className="max-w-full max-h-full" width={25} height={25} src={club.badge_url} alt={club.name} />
          <h1 className='text-white'>{club.name.toLocaleUpperCase()}</h1>
        </div>
      </div>
      <div className='mx-auto mb-4 bg-slate-100 py-4 flex-wrap w-full justify-center px-10 flex gap-4'>
        {newsList.map((news: News) => {
          return <NewsCard {...news} key={news.title}/>
        })}
        <div className="flex p-2 flex-col overflow-hidden w-80 bg-white h-{400} rounded-sm shadow-lg">
          <h2 className='text-center font-bold'>Próximos jogos</h2>
          {fixtures.map((fixture:any) => {
            const [hour, minutes] = fixture.time.split(':')
            const hourConverted = Number(hour) + 1
            const timeConverted = `${hourConverted}:${minutes}`
            return(
              <div key={`${fixture.home}-${fixture.away}`} className='border bg-gray-50 shadow-md mt-1 p-1 rounded-sm'>
                <div className='text-xs text-center w-full'>
                  <span>{fixture.day.split(',')[1]}</span>
                  <span className='font-semibold mx-2'>{fixture.league}</span>
                  <span>{timeConverted}</span>
                </div>
                <div className='text-center w-full'>
                  <span>{fixture.home}</span>
                  <span className=' mx-2'>x</span>
                  <span>{fixture.away}</span>
                </div>
          </div>
            )
          })}

          
        </div>
      </div>
    </>
  )

}