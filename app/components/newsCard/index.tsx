import { News } from "@/app/page";

export function NewsCard(news :News) {
  if(news.img_url) {
    return (
      <div className="flex p-2 flex-col overflow-hidden w-80 bg-white h-{400} rounded-sm shadow-lg">
        
        <img src={news.img_url} alt={news.title} width='100%' />
        
        <div className="my-2 flex flex-1 flex-col">
          <p className="font-bold text-sm">{news.title}</p>
          <div className="flex w-full justify-between text-xs mt-3 font-bold bottom-0 left-0">
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
  <></>
}