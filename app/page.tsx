import { Header } from '@/app/components/header'
import { Banner } from './components/banner'
import { NewsCard } from './components/newsCard'

export type News = {
  title: string,
  img_url: string,
  link: string,
  source_img: string,
  source_name: string

}

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/v1/topnews')
  const resBody = await res.json()
  const {newsList} = resBody
  const bannerNews = newsList[0]
  const newsListCard = newsList.toSpliced(0,1)

  return (
    <>
      <Header/>
      <Banner {...bannerNews}/>
      <div>
        <div className='mx-auto flex-wrap w-full px-10 flex gap-4'>
          {newsListCard.map((news: News) => {
            return <NewsCard {...news} key={news.title}/>
          })}
        </div>
      </div>
    </>
  )
}
