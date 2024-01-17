import { News } from "@/app/page";

export function NewsCard(news :News) {
  return (
    <div className="flex p-2 flex-col overflow-hidden w-56 bg-white h-96 rounded-sm shadow-lg">
      <img src={news.img_url} alt={news.title} width='100%' />
      
      <div className="my-2 flex font-bold text-sm flex-1 relative flex-col">
        <p>{news.title}</p>
        <div className="flex w-full justify-between absolute bottom-0 left-0">
          <div className="flex gap-2">
            <img src={news.source_img} width={25}/>
            <p>{news.source_name}</p>
          </div>
          <a href={news.link} className="text-sky-600 font-bold">Acesse</a>
        </div>
      </div>
    </div>
  )
}