import { News } from "@/app/page";

export function Banner(news :News) {
  return(
    <div className="flex w-full lg:flex-row flex-col items-center gap-2 mt-4 mx-auto px-10">
      <img src={news.img_url}
      alt={news.title}
      className="lg:w-3/4"
      />
      
      <div className="flex flex-col">
        <p className="font-bold">
          {news.title}
        </p>
        <div className="flex items-center justify-between font-bold my-5">
          <div className="flex gap-3">
            <img src={news.source_img} width={30}/>
            <p>{news.source_name}</p>
          </div>
          <a href={news.link} className="text-sky-600 font-bold">Acesse</a>
        </div>
      </div>
    </div>
  )
}