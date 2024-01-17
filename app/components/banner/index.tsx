import { News } from "@/app/page";

export function Banner(news :News) {
  return(
    <a href={news.link}>
      <div className="flex w-full lg:flex-row flex-col items-center gap-2 mt-4 mx-auto px-10">
        <img src={news.img_url}
        alt={news.title}
        className="lg:w-1/2"
        />
        
        <div className="flex flex-col it">
          <p className="font-bold">
            {news.title}
          </p>
          <div className="flex items-center gap-4 my-6">
            <img 
              src={news.source_img}
              width={30}
            />
            <p>{news.source_name}</p>
          </div>
        </div>
      </div>
    </a>
  )
}