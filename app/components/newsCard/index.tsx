import { News } from "@/app/page";

export function NewsCard(news :News) {
  return (
    <a href={news.link}>
      <div className="flex flex-col overflow-hidden w-80 border-solid rounded h-auto">
        <img src={news.img_url} alt={news.title} width={320} />
        
        <div className="m-2 font-medium">
        <p>{news.title}</p>
        <div className="flex gap-2 my-2">
          <img src={news.source_img} width={20}/>
          <p>{news.source_name}</p>
        </div>
        </div>
      </div>
    </a>
  )
}