import { Banner } from './components/banner'
import { Header } from './components/header'
import { NewsCard } from './components/newsCard'

export type News = {
  title: string,
  img_url: string,
  link: string,
  source_img: string,
  source_name: string

}

export default async function Home() {
  const res = await fetch(`${process.env.BASE_URL}/api/v1/topnews`, { next: { revalidate: 3600 } })
  const resBody = await res.json()
  const {newsList} = resBody
  const bannerNews = newsList[0]
  const newsListCard = newsList.slice(1)

  return (
    <>
      <Header/>
      <Banner {...bannerNews}/>
      <div className='bg-slate-100 pt-7'>
        <div className='mx-auto mb-4 flex-wrap w-full justify-center px-10 flex gap-4'>
          {newsListCard.map((news: News) => {
            return <NewsCard {...news} key={news.title}/>
          })}
        </div>
      </div>
    </>
  )
}
